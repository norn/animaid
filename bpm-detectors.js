// BPM Detection Algorithms Integration
import { createRealTimeBpmProcessor } from 'realtime-bpm-analyzer';
import * as BeatDetector from 'web-audio-beat-detector';
import { guess } from 'music-beat-detector';

// Export all detectors to the window object for browser use
window.BPMDetectors = {
    RealtimeBPM: { createRealTimeBpmProcessor },
    BeatDetector,
    MusicBeatDetector: { guess }
};
