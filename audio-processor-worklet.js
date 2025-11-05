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

            // Copy input to output (passthrough)
            const output = outputs[0];
            if (output && output.length > 0) {
                for (let channel = 0; channel < output.length; channel++) {
                    output[channel].set(input[Math.min(channel, input.length - 1)]);
                }
            }
        }

        // Return true to keep processor alive
        return true;
    }
}

registerProcessor('bpm-audio-processor', BPMAudioProcessor);
