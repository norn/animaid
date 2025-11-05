# AnimaID

**Procedural Skeletal Animation Generator from ULID**

AnimaID generates unique, dancing skeletal avatars based on ULID (Universally Unique Lexicographically Sortable Identifier) strings. Each ULID produces a deterministic, reproducible animation with distinct characteristics.

[**Live Demo**](https://norn.github.io/animaid/)

## Features

- **Deterministic Generation**: Same ULID always produces the same dancer
- **Procedural Animation**: Dynamic BPM skeletal animation with 15 body joints
- **Real-time Beat Detection**: Dance to live music from your microphone
- **Diverse Dance Styles**: Hip-hop, contemporary, latin, ballet, and freestyle
- **Realistic Physics**: Natural body balance, arm-leg coordination, and anatomically correct joint angles
- **Lightweight**: ~25KB JavaScript library, ~13KB HTML page
- **No Dependencies**: Pure vanilla JavaScript and SVG

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

**Parameters:**
- `ulid` (string): A 26-character ULID string
- `bpm` (number, optional): Beats per minute for animation speed (default: 120)

**Example:**
```javascript
// Default 120 BPM
const dancer = new SkeletalAnimaID('01HQZM3K7X9YF2NW8TBVKJD6PQ');

// Custom BPM (e.g., 140 BPM for faster dance)
const fastDancer = new SkeletalAnimaID('01HQZM3K7X9YF2NW8TBVKJD6PQ', 140);
```

### Methods

#### `generateSVG(size)`

Generates an animated SVG element as a string.

**Parameters:**
- `size` (number, optional): Width in pixels (default: 200)

**Returns:** SVG string with embedded CSS animations

**Example:**
```javascript
const svg = dancer.generateSVG(300);
document.body.innerHTML = svg;
```

#### `getDanceInfo()`

Returns detailed information about the generated dancer.

**Returns:** Object containing:
```javascript
{
    color: "hsl(240, 80%, 50%)",        // Body color
    energy: 0.75,                       // Energy level (0.3-1.0)
    physique: {
        height: 1.0,                    // Height scale
        build: 1.05,                    // Body build (0.85-1.25)
        legToBodyRatio: 1.0             // Leg/torso proportion
    },
    preferences: {
        armMovement: 0.8,               // Arm activity (0-1)
        legMovement: 0.7,               // Leg activity (0-1)
        bodyRotation: 0.6,              // Torso rotation (0-1)
        jumpiness: 0.5,                 // Vertical movement (0-1)
        symmetry: 0.4,                  // Left-right symmetry (0-1)
        headMovement: 0.5,              // Head bobbing (0-1)
        hipSway: 0.3,                   // Hip sway (0-1)
        shoulderBounce: 0.6,            // Shoulder bounce (0-1)
        rhythmVariation: 0.6            // Rhythm variation (0-1)
    },
    poses: [...],                       // Array of 16 pose objects
    moves: [...]                        // Array of move descriptions
}
```

## How It Works

### Skeletal Structure

Each dancer has a 15-joint skeleton:
- Head
- Neck
- Torso (upper, middle, lower)
- Shoulders (left, right)
- Elbows (left, right)
- Hands (left, right)
- Hips (left, right)
- Knees (left, right)
- Feet (left, right)

### Animation System

1. **Pose Generation**: The ULID seed generates 16 unique keyframe poses
2. **Dance Style**: The seed determines one of 6 dance styles:
   - Energetic (hip-hop, breakdance)
   - Smooth (contemporary, lyrical)
   - Rhythmic (step, african)
   - Latin (salsa, samba)
   - Symmetric (ballet, jazz)
   - Freestyle (random)
3. **Physics**:
   - Arm-leg coordination (right leg forward → left arm forward)
   - Body balance (torso tilt for center of mass)
   - Natural knee bending during steps
   - Anatomically constrained joint angles
4. **Timing**: Configurable BPM (default 120), 8 beats/cycle
   - 120 BPM = 0.5 sec/beat = 4.0 sec cycle
   - 140 BPM = 0.43 sec/beat = 3.4 sec cycle
   - 90 BPM = 0.67 sec/beat = 5.3 sec cycle
5. **Interpolation**: Smooth transitions between poses using CSS ease-in-out

### Deterministic Generation

The library uses a seeded random number generator. The same ULID will always produce:
- Same color
- Same physique
- Same dance style
- Same movement sequence (independent of BPM)

**Note**: Animation timing (speed) is controlled by the `bpm` parameter and can vary while keeping the same movement sequence.

## Dance Styles

The generator supports 6 distinct dance styles, each with characteristic movement patterns:

| Style | Characteristics | Probability |
|-------|----------------|-------------|
| **Energetic** | High arm/leg movement, jumps, shoulder bouncing | 15% |
| **Smooth** | Flowing arms, hip sway, minimal jumping | 15% |
| **Rhythmic** | Strong leg movement, foot stomping, steady rhythm | 15% |
| **Latin** | Hip sway, body rotation, fluid arms | 15% |
| **Symmetric** | Balanced movements, structured poses | 15% |
| **Freestyle** | Random combination of all parameters | 25% |

## Beat Detection

The live demo (`index.html`) includes real-time beat detection from microphone input:

### How It Works

1. **Microphone Access**: Click "🎤 Start Beat Detection" to access your microphone
2. **Audio Analysis**: Analyzes audio frequencies (focusing on bass/rhythm range)
3. **Beat Detection**: Detects beats when energy spikes above average
4. **BPM Calculation**: Calculates tempo from median interval of last 16 beats
5. **Real-time Sync**: All dancers update instantly to match detected BPM

### Features

- **Visual Feedback**: BPM indicator flashes yellow on red background when beat detected
- **Live BPM Display**: Shows current detected BPM (60-200 range)
- **Gallery Sync**: All dancers in gallery update in real-time with detected tempo
- **Smooth Detection**: Uses median filtering to avoid outliers and false positives

### Usage

```javascript
// In the browser demo
// 1. Click "🎤 Start Beat Detection"
// 2. Play music or make rhythmic sounds
// 3. Watch all dancers sync to the detected beat!
```

The beat detection works best with:
- Clear rhythmic music
- Prominent bass/kick drums
- Consistent tempo (60-200 BPM)

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

### Generate Multiple Dancers

```javascript
const ulids = [
    '01HQZM3K7X9YF2NW8TBVKJD6PQ',
    '01HQZM4R2AFGH3NW9UCVKJD7RS',
    '01HQZM5T3BKLM4NX0VDWKJE8ST'
];

ulids.forEach(ulid => {
    const dancer = new SkeletalAnimaID(ulid);
    console.log(`${ulid}: Energy ${(dancer.getDanceInfo().energy * 100).toFixed(0)}%`);
});
```

### Different BPM, Same Choreography

```javascript
const ulid = '01HQZM3K7X9YF2NW8TBVKJD6PQ';

// Same ULID, different speeds
const slowDancer = new SkeletalAnimaID(ulid, 80);   // Slow tempo
const normalDancer = new SkeletalAnimaID(ulid, 120); // Normal tempo
const fastDancer = new SkeletalAnimaID(ulid, 160);   // Fast tempo

// All three dancers have identical move sequences, just different speeds!
console.log('Slow:', slowDancer.getDanceInfo().moves[0]);
console.log('Normal:', normalDancer.getDanceInfo().moves[0]);
console.log('Fast:', fastDancer.getDanceInfo().moves[0]);
// All three will log the same move description
```

### Custom Styling

```javascript
const dancer = new SkeletalAnimaID('01HQZM3K7X9YF2NW8TBVKJD6PQ');
const info = dancer.getDanceInfo();

// Use the dancer's color for themed UI
document.body.style.background = info.color;

// Generate SVG with custom size
const svg = dancer.generateSVG(500);
```

### Gallery Generation

```javascript
function generateGallery(count) {
    const chars = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
    const dancers = [];

    for (let i = 0; i < count; i++) {
        let ulid = '';
        for (let j = 0; j < 26; j++) {
            ulid += chars[Math.floor(Math.random() * chars.length)];
        }
        dancers.push(new SkeletalAnimaID(ulid));
    }

    return dancers;
}

const gallery = generateGallery(10);
gallery.forEach(dancer => {
    const div = document.createElement('div');
    div.innerHTML = dancer.generateSVG(150);
    document.body.appendChild(div);
});
```

## Technical Details

### ULID Format

AnimaID accepts standard 26-character ULID strings:
- Characters: `0123456789ABCDEFGHJKMNPQRSTVWXYZ` (Crockford's Base32)
- Length: 26 characters
- Example: `01HQZM3K7X9YF2NW8TBVKJD6PQ`

### Seeded Random Generation

The library uses a deterministic pseudo-random number generator:

```javascript
seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}
```

This ensures reproducibility across different platforms and browsers.

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

```bash
git clone https://github.com/norn/animaid.git
cd animaid
# Open index.html in your browser
```

### Running Tests

Open `index.html` in a browser and verify:
- Same ULID produces identical animation
- All dance styles appear in gallery
- Animations are smooth at 120 BPM
- Responsive layout works on mobile

## Roadmap

- [x] ~~Music integration~~ (✅ Beat detection implemented!)
- [ ] Add more dance styles (robot, swing, disco)
- [ ] Export animation as GIF/video
- [ ] Custom color schemes
- [ ] Facial expressions
- [ ] Multiple dancer synchronization
- [ ] Save/load custom BPM presets

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
