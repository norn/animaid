# BPM Detection Audit — 2026-07-12

Follow-up audit after the fixes in 95d5b6e and the realtime-bpm-analyzer v5 migration in ae105bc.
31 confirmed findings; verification: multi-agent review with adversarial cross-checking, plus direct execution checks (Node.js, math grids, generated CSS). One candidate was refuted (`audioContext.resume()` is not needed — the context is created inside a click handler).

Severity is calibrated to realistic user impact. Findings are **not yet fixed** — this document is the deliverable.

## High — break BPM detection in real-world use

1. **`getUserMedia({audio: true})` leaves echo cancellation / noise suppression / AGC enabled** — `index.html:558`.
   Browsers' default processing treats music played through speakers as noise/echo and attenuates exactly the signal the detectors need; AGC also defeats fixed thresholds. This is the most likely reason "it works with a synthetic test signal but not with real music".
   Fix: `getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } })`.

2. **No gain normalization vs web-audio-beat-detector's hard `> 0.25` amplitude gate** — `index.html:800` (`analyzeCapturedBuffer`).
   The library's worker only searches for peaks if max amplitude exceeds 0.25 (after its own 240 Hz lowpass, on top of the app's 250 Hz one). Typical mic levels for ambient music sit below that, so `analyze`/`guess` throw "no detectable beats" forever. Normalize the captured buffer (scale to peak ≈ 1.0) before analysis.

3. **Failed start leaks a live microphone stream + AudioContext and reports "Microphone access denied"** — `index.html:605`.
   If `getUserMedia` succeeds but a later await throws (e.g. `audioWorklet.addModule` 404 / file://), the catch block neither stops the tracks nor closes the context; the browser's recording indicator stays on while the UI says access was denied. Track and release all acquired resources in the catch.

4. **No concurrency guard in `startMicrophone`** — `index.html:552`.
   `isListening` flips only at the end, so a second click while the permission prompt is open runs a second full setup. Module-level vars are overwritten; the first audio graph is orphaned but keeps posting blocks (double energy stream → garbage intervals), and Stop only tears down the last one. Set a "starting" flag before the first await.

5. **Beat dot can stay permanently dead for realtime / web-audio / guess modes** — `index.html:603` + `749`.
   `startMicrophone` calls `stopBeatSync()`, and the dot is only restarted from a *stable-and-different* BPM update. If the track's BPM is within ±3 of the current 120 (or of any previously confirmed value), no update ever fires and the dot never pulses again for these algorithms. Restart beat sync when detection starts (or on the first stable reading regardless of delta).

6. **Combine-then-validate ordering discards a valid autocorrelation result** — `index.html:992-1006` (simple mode).
   The 60–200 range check runs only after combining. When interval clustering yields an out-of-range value (e.g. 240 from kick+snare hits at 120 BPM — the 200 ms refractory allows up to 300), the `else if (autocorrelationBPM && !detectedBPM)` fallback can't fire and the final gate throws both values away, including a confident in-range autocorrelation result. Validate/fold each method's result before combining.

## Medium

7. **ULID input is only length-checked and flows into innerHTML + CSS identifiers** — `index.html:391/407`, `animaid.js:452`.
   Any pasted 26-char string passes. Quotes/angle brackets break out of attributes in the params panel (self-XSS, markup injection); characters like `.`/`#`/space produce invalid CSS class names — the dancer silently freezes, and the `updateAnimationDuration` regex (`[a-zA-Z0-9\-]+`, `index.html:1118`) stops matching, so tempo changes no longer apply. Validate against Crockford base32 (`/^[0-9A-HJKMNP-TV-Z]{26}$/i`).

8. **Shadow animation pivots on the viewBox center, not the ellipse** — `animaid.js:509` (`transform-origin: center center`).
   For SVG, CSS `center` resolves against the view-box (100,150) unless `transform-box: fill-box` is set; the shadow ellipse sits at y≈227, so `scaleY` keyframes displace it ~23 px upward on every jump. Add `transform-box: fill-box` (or set the origin to the ellipse center).

9. **"Symmetric" poses don't actually mirror** — `animaid.js:291-294, 317-319`.
   The symmetry branches negate shoulder/hip angles but copy elbow/knee angles with the same sign; a true mirror needs opposite rotation for the child joints too. Ballet/jazz-style dancers come out visibly lopsided despite `symmetry > 0.7`.

10. **Realtime mode double-counts stable readings** — `index.html:652-653`.
    v5 posts `bpm` on every chunk *and* `bpmStable` for the same analysis pass; both handlers feed `handleBPMDetection`, so a stable reading enters `bpmHistory` twice per pass, skewing the average toward whatever value happens to fire `bpmStable`.

11. **"~" (detecting) indicator sticks forever** — `index.html:749`.
    `handleBPMDetection` updates the display on (stable AND |Δ|≥3) or (unstable). Stable-within-tolerance is a dead zone: after any unstable period the indicator keeps showing `♪ ~ N BPM` even though detection has stabilized.

12. **Autocorrelation lag bounds are off at both ends** — `index.html:834-835, 853`.
    `minLag` uses `floor` (admits lags mapping up to 215 BPM, above the advertised 200 — and the caller applies no range check to `autocorrelationBPM`), while the loop's exclusive `<` bound makes 60–62 BPM unreachable. Use `ceil` for minLag and `<=` for maxLag.

13. **`package.json` metadata is broken** — `repository.url` points to a localhost git proxy (`http://local_proxy@127.0.0.1:49687/...`), `license: ISC` contradicts the MIT LICENSE/README/source headers, and `description` contains raw `**` markdown.

14. **Algorithm dropdown is silently ignored while listening** — `index.html:555`; it's read once at start, and the realtime-failure fallback (`index.html:661`) switches `currentAlgorithm` to `simple` without updating the select — UI and actual algorithm diverge.

## Low

15. **Quantized autocorrelation BPM averaged 50/50 with the clustered value** — `index.html:995`. The energy-signal lag grid at 44.1 kHz can only produce `…129, 123, 117…` — 120 BPM is unrepresentable, so a correct clustered 120 gets dragged to 121–122.
16. **No absolute noise floor in the simple detector** — `index.html:953`. In near-silence the threshold is relative to the noise floor, so keyboard clicks/breathing register as beats.
17. **In-flight `analyzeCapturedBuffer` resolves after Stop** — `index.html:817` — and pushes a stale reading into the freshly reset `bpmHistory` (same for realtime events already queued at Stop, `index.html:652`). Guard with `if (!isListening) return` in `handleBPMDetection`.
18. **`pose.bodyTilt` is computed and drives "balance" move descriptions but is never emitted into any keyframe** — `animaid.js:307/358` vs `generateAllAnimations`.
19. **Stable BPM changes rewrite `<style>` textContent** — `index.html:1123` — re-mapping elapsed time under the new duration: every dancer visibly teleports to a different cycle position on each confirmed change.
20. **Beat dot interval is free-running `setInterval`** — `index.html:372` — never phase-aligned to the CSS animation clock and drifting relative to it.
21. **Subtitle asserts unconfirmed readings** — `index.html:1043` — jittery unstable BPM values are printed without the `~` marker while dancers still animate at the confirmed BPM.
22. **Dead state** — `lastGeneratedBPM` (`index.html:363/396/1062`) and `galleryULIDs` (`index.html:477/497`) are written but never read.
23. **README drift** — `getDanceInfo()` docs omit `danceStyle` and claim 16 poses (actual: 17 including the loop-closing copy) (`README.md:69-77`); beat-detection steps tell users to pick the algorithm *after* clicking Start, which does nothing (`README.md:107-108`); size claims are stale (28.8 KB / 5.3 KB gzipped vs "25 KB / ~8 KB gzipped", `README.md:140`); `animaid.js` header says `@version 2.0.0` vs package.json `1.0.0`.

## Verified as working (no action needed)

- realtime-bpm-analyzer v5 API usage matches the bundled library exactly (options, `.node`, event names, payload shape, `stop()`/`disconnect()`); the bundle is in sync with `bpm-detectors.js` and the locked dependency versions.
- `analyze()`/`guess()` signatures with `tempoSettings {60–200}` are correct for v8.2.37; `guess().tempo` is destructured properly.
- Keyframe math: 16 poses over 8 beats land exactly on half-beats; `updateAnimationDuration`'s regex covers all 11 animation declarations; Node.js usage from the README works; generation is deterministic.
- The audio worklet is analysis-only (no playback path), and 1024-sample blocks divide evenly into 128-frame render quanta.
