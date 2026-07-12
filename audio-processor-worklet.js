// AudioWorklet processor for BPM detection
// This replaces the deprecated ScriptProcessorNode

class BPMAudioProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.bufferSize = 1024;
        this.buffer = new Float32Array(this.bufferSize);
        this.bufferIndex = 0;
    }

    process(inputs, outputs, parameters) {
        const input = inputs[0];

        // If we have input channels
        if (input && input.length > 0) {
            const channelData = input[0]; // Get first channel

            // Accumulate data in our buffer
            for (let i = 0; i < channelData.length; i++) {
                this.buffer[this.bufferIndex++] = channelData[i];

                // When buffer is full, send it to main thread
                if (this.bufferIndex >= this.bufferSize) {
                    // Send a copy of the buffer to main thread
                    this.port.postMessage({
                        type: 'audioData',
                        data: this.buffer.slice()
                    });

                    this.bufferIndex = 0;
                }
            }

            // Output is intentionally left silent: the microphone signal is
            // only analyzed, never played back (no acoustic feedback loop).
        }

        // Return true to keep processor alive
        return true;
    }
}

registerProcessor('bpm-audio-processor', BPMAudioProcessor);
