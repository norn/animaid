# AnimaID

**Procedural Skeletal Animation Generator from ULID**

AnimaID generates unique, dancing skeletal avatars based on ULID (Universally Unique Lexicographically Sortable Identifier) strings. Each ULID produces a deterministic, reproducible animation with distinct characteristics.

[**Live Demo**](https://norn.github.io/animaid/)

## Features

- **Deterministic Generation**: Same ULID always produces the same dancer
- **Procedural Animation**: 15-joint skeletal animation with 9 unique dance styles
- **Real-time Beat Detection**: Syncs to live music from your microphone
- **Diverse Dance Styles**: Energetic, smooth, rhythmic, latin, symmetric, freestyle, robot, swing, and disco
- **Realistic Physics**: Natural body balance, arm-leg coordination, and anatomical constraints
- **Lightweight**: ~25KB JavaScript, pure vanilla with no dependencies

## Quick Start

### Browser Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>AnimaID Demo</title>
</head>
<body>
    <div id="dancer"></div>

    <script src="animaid.js"></script>
    <script>
        const dancer = new SkeletalAnimaID('01HQZM3K7X9YF2NW8TBVKJD6PQ');
        document.getElementById('dancer').innerHTML = dancer.generateSVG(300);
    </script>
</body>
</html>
```

### Node.js Usage

```javascript
const SkeletalAnimaID = require('./animaid.js');

const dancer = new SkeletalAnimaID('01HQZM3K7X9YF2NW8TBVKJD6PQ');
const svg = dancer.generateSVG(200);
const info = dancer.getDanceInfo();

console.log('Dance style parameters:', info.preferences);
```

## API Reference

### Constructor

```javascript
new SkeletalAnimaID(ulid, bpm = 120)
```
- `ulid`: 26-character ULID string
- `bpm`: Beats per minute (default: 120)

### Methods

**`generateSVG(size)`** - Returns animated SVG string
- `size`: Width in pixels (default: 200)

**`getDanceInfo()`** - Returns dancer properties
```javascript
{
    color: "hsl(...)",
    energy: 0.75,              // 0.3-1.0
    physique: {...},           // height, build, legToBodyRatio
    preferences: {...},        // 9 movement parameters (0-1)
    poses: [...],              // 16 keyframe poses
    moves: [...]               // Move descriptions
}
```

## How It Works

1. **ULID Seed** → 15-joint skeleton (head, neck, torso, arms, legs) with 16 keyframe poses
2. **Dance Style** → ULID determines one of 9 styles with unique movement patterns
3. **Physics** → Arm-leg coordination, body balance, anatomical constraints
4. **Animation** → CSS keyframes with configurable BPM (60-200), 8 beats/cycle
5. **Deterministic** → Same ULID always produces same color, physique, style, and moves

## Dance Styles

The generator supports 9 distinct dance styles:

| Style | Characteristics |
|-------|----------------|
| **Energetic** | High arm/leg movement, jumps, shoulder bouncing (hip-hop, breakdance) |
| **Smooth** | Flowing arms, hip sway, minimal jumping (contemporary, lyrical) |
| **Rhythmic** | Strong leg movement, foot stomping, steady rhythm (step, african) |
| **Latin** | Hip sway, body rotation, fluid arms (salsa, samba) |
| **Symmetric** | Balanced movements, structured poses (ballet, jazz) |
| **Robot** | Mechanical, rigid movements with precise angles |
| **Swing** | Bouncy, retro movements with rhythmic bounce |
| **Disco** | Groovy arm movements with shimmy and flair |
| **Freestyle** | Random combination of all parameters |

## Beat Detection

The live demo includes real-time microphone beat detection with multiple algorithm options:

1. Click "🎤 Start Beat Detection"
2. Select your preferred BPM detection algorithm
3. Play music or make rhythmic sounds
4. All dancers sync automatically to detected BPM (60-200)

### Available BPM Algorithms

- **Simple (Current)**: Custom implementation using autocorrelation and interval clustering. Fast and efficient for most music.
- **Realtime BPM Analyzer**: Uses [realtime-bpm-analyzer](https://github.com/dlepaux/realtime-bpm-analyzer) for continuous real-time analysis with stabilization.
- **Web Audio Beat Detector**: Implements [web-audio-beat-detector](https://github.com/chrisguttandin/web-audio-beat-detector) for accurate tempo detection.
- **Music Beat Detector**: Leverages [music-beat-detector](https://github.com/chrvadala/music-beat-detector) for comprehensive beat analysis.

Features visual feedback (flashing indicator), median filtering for stability, and works best with clear rhythmic music with prominent bass.

### Building the BPM Detectors

If you want to modify the BPM detection algorithms:

```bash
npm install
npm run build
```

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Opera: ✅ Full support
- IE11: ❌ Not supported (uses CSS animations and ES6)

## Performance

- **File Size**: 25KB uncompressed, ~8KB gzipped
- **Animation**: Pure CSS keyframes, 60fps, GPU-accelerated
- **Memory**: <1MB per dancer instance
- **Load Time**: Instantaneous generation (<10ms per dancer)

## Examples

```javascript
// Multiple dancers
const dancer1 = new SkeletalAnimaID('01HQZM3K7X9YF2NW8TBVKJD6PQ');
const dancer2 = new SkeletalAnimaID('01HQZM4R2AFGH3NW9UCVKJD7RS', 140); // Fast tempo

// Get dancer info
const info = dancer1.getDanceInfo();
console.log(`Energy: ${info.energy}, Color: ${info.color}`);

// Different BPM, same choreography
const slow = new SkeletalAnimaID('01HQZM3K7X9YF2NW8TBVKJD6PQ', 80);
const fast = new SkeletalAnimaID('01HQZM3K7X9YF2NW8TBVKJD6PQ', 160);
// Both have identical moves, different speeds
```

## Technical Details

- **ULID Format**: 26-character Base32 string (e.g., `01HQZM3K7X9YF2NW8TBVKJD6PQ`)
- **Seeded RNG**: Deterministic pseudo-random generation ensures reproducibility
- **Animation**: CSS keyframes, 60fps, GPU-accelerated
- **File Size**: ~25KB uncompressed, ~8KB gzipped

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contributing

```bash
git clone https://github.com/norn/animaid.git
cd animaid
# Open index.html in your browser
```

Contributions welcome! Please submit a Pull Request.

## Roadmap

- [x] Beat detection
- [x] 9 dance styles (robot, swing, disco added)
- [ ] Export as GIF/video
- [ ] Custom color schemes
- [ ] Facial expressions

## Credits

Created by [Andrey Perliev](https://github.com/norn)

Inspired by:
- [ULID Spec](https://github.com/ulid/spec)
- Procedural generation techniques
- Traditional skeletal animation systems

## Support

- Report bugs: [GitHub Issues](https://github.com/norn/animaid/issues)
- Questions: [GitHub Discussions](https://github.com/norn/animaid/discussions)

---

Made with ❤️ for the procedural generation community
