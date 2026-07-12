// BPM Detection Algorithms Integration
import { createRealTimeBpmProcessor } from 'realtime-bpm-analyzer';
import * as BeatDetector from 'web-audio-beat-detector';

// Export all detectors to the window object for browser use.
// Note: both the "analyze" and "guess" demo modes use web-audio-beat-detector;
// guess() returns an object { bpm, offset, tempo }, not a plain number.
window.BPMDetectors = {
    RealtimeBPM: { createRealTimeBpmProcessor },
    BeatDetector
};
