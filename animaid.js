/**
 * AnimaID - Procedural Skeletal Animation from ULID
 * Generates unique dancing avatars based on ULID identifiers
 * @version 2.0.0
 * @license MIT
 */

class SkeletalAnimaID {
    constructor(ulid) {
        this.ulid = ulid;
        this.seed = this.hashULID(ulid);
        this.bpm = 120;
        this.beatsPerCycle = 8;
        this.cycleDuration = (60 / this.bpm) * this.beatsPerCycle; // 4 seconds
    }

    hashULID(ulid) {
        let hash = 0;
        for (let i = 0; i < ulid.length; i++) {
            const char = ulid.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash);
    }

    seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    generateColor() {
        const r1 = this.seededRandom(this.seed * 3);
        const r2 = this.seededRandom(this.seed * 4);
        const r3 = this.seededRandom(this.seed * 5);

        return {
            hue: Math.floor(r1 * 360),
            saturation: 60 + Math.floor(r2 * 40),
            lightness: 40 + Math.floor(r3 * 20)
        };
    }

    generateEnergy() {
        return 0.3 + this.seededRandom(this.seed * 6) * 0.7; // 0.3 to 1.0
    }

    generatePhysique() {
        const r1 = this.seededRandom(this.seed * 132);

        return {
            height: 1.0,
            build: 0.85 + r1 * 0.4, // from 0.85 (slim) to 1.25 (stocky)
            legToBodyRatio: 1.0
        };
    }

    generateMovePreferences() {
        const r = (offset) => this.seededRandom(this.seed * offset);

        const styleRoll = r(7);
        let style = {};

        if (styleRoll < 0.15) {
            // Energetic, active style (hip-hop, break)
            style = {
                armMovement: 0.8 + r(71) * 0.2,
                legMovement: 0.7 + r(72) * 0.3,
                bodyRotation: 0.6 + r(73) * 0.4,
                jumpiness: 0.5 + r(74) * 0.5,
                symmetry: r(75) * 0.4,
                headMovement: 0.5 + r(76) * 0.5,
                hipSway: r(77) * 0.3,
                shoulderBounce: 0.6 + r(78) * 0.4,
                rhythmVariation: 0.6 + r(79) * 0.4
            };
        } else if (styleRoll < 0.30) {
            // Smooth, flowing style (contemporary, lyrical)
            style = {
                armMovement: 0.7 + r(81) * 0.3,
                legMovement: 0.4 + r(82) * 0.3,
                bodyRotation: 0.5 + r(83) * 0.3,
                jumpiness: 0.1 + r(84) * 0.3,
                symmetry: 0.6 + r(85) * 0.4,
                headMovement: 0.3 + r(86) * 0.4,
                hipSway: 0.5 + r(87) * 0.5,
                shoulderBounce: 0.2 + r(88) * 0.3,
                rhythmVariation: 0.2 + r(89) * 0.3
            };
        } else if (styleRoll < 0.45) {
            // Rhythmic, percussive style (step, african)
            style = {
                armMovement: 0.4 + r(91) * 0.4,
                legMovement: 0.8 + r(92) * 0.2,
                bodyRotation: 0.3 + r(93) * 0.4,
                jumpiness: 0.4 + r(94) * 0.5,
                symmetry: 0.7 + r(95) * 0.3,
                headMovement: 0.6 + r(96) * 0.4,
                hipSway: 0.3 + r(97) * 0.3,
                shoulderBounce: 0.5 + r(98) * 0.5,
                rhythmVariation: 0.7 + r(99) * 0.3
            };
        } else if (styleRoll < 0.60) {
            // Latin style (salsa, samba)
            style = {
                armMovement: 0.6 + r(101) * 0.4,
                legMovement: 0.6 + r(102) * 0.4,
                bodyRotation: 0.7 + r(103) * 0.3,
                jumpiness: 0.2 + r(104) * 0.3,
                symmetry: r(105) * 0.5,
                headMovement: 0.4 + r(106) * 0.3,
                hipSway: 0.8 + r(107) * 0.2,
                shoulderBounce: 0.4 + r(108) * 0.4,
                rhythmVariation: 0.5 + r(109) * 0.3
            };
        } else if (styleRoll < 0.75) {
            // Symmetric, structured (ballet, jazz)
            style = {
                armMovement: 0.7 + r(111) * 0.3,
                legMovement: 0.6 + r(112) * 0.4,
                bodyRotation: 0.4 + r(113) * 0.3,
                jumpiness: 0.3 + r(114) * 0.4,
                symmetry: 0.8 + r(115) * 0.2,
                headMovement: 0.2 + r(116) * 0.3,
                hipSway: 0.2 + r(117) * 0.3,
                shoulderBounce: 0.3 + r(118) * 0.3,
                rhythmVariation: 0.3 + r(119) * 0.2
            };
        } else {
            // Random, freestyle
            style = {
                armMovement: r(121),
                legMovement: r(122),
                bodyRotation: r(123),
                jumpiness: r(124),
                symmetry: r(125),
                headMovement: r(126),
                hipSway: r(127),
                shoulderBounce: r(128),
                rhythmVariation: r(129)
            };
        }

        return style;
    }

    generatePoseSequence() {
        const energy = this.generateEnergy();
        const prefs = this.generateMovePreferences();
        const poses = [];

        for (let i = 0; i < 15; i++) {
            const t = i / 15;
            const seed = this.seed + i * 1000;
            poses.push(this.generatePose(t, energy, prefs, seed));
        }

        // 16th pose = first pose for smooth looping
        poses.push(poses[0]);

        this.generateHeadSequence(poses, energy, prefs);

        return poses;
    }

    generateHeadSequence(poses, energy, prefs) {
        const headSeed = this.seed * 7 + 12345;
        const r = (i, offset) => this.seededRandom(headSeed + i * 500 + offset);

        for (let i = 0; i < poses.length - 1; i++) {
            const t = i / 14;
            const baseSwing = Math.sin(t * Math.PI * 4) * 8 * prefs.headMovement;
            const randomOffset = this.lerp(-3, 3, r(i, 0)) * energy * prefs.headMovement;
            poses[i].headTilt = baseSwing + randomOffset;
        }

        poses[poses.length - 1].headTilt = poses[0].headTilt;
    }

    generatePose(t, energy, prefs, seed) {
        const r = (offset) => this.seededRandom(seed + offset);

        const bodyRotate = this.lerp(-20, 20, r(2)) * energy * prefs.bodyRotation;
        const hipSway = Math.sin(t * Math.PI * 4) * 15 * energy * prefs.hipSway;

        const isRightLegSupporting = Math.cos(t * Math.PI * 2) > 0;

        let rightHipAngle, rightKneeAngle, rightHipOffsetX;
        if (isRightLegSupporting) {
            rightHipAngle = this.lerp(-20, 20, r(7)) * energy * prefs.legMovement * 0.7;
            rightKneeAngle = this.lerp(0, 30, r(8)) * prefs.legMovement * 0.5;
            rightHipOffsetX = this.lerp(-8, 8, r(71)) * energy;
        } else {
            rightHipAngle = this.lerp(-60, 60, r(7)) * energy * prefs.legMovement;
            rightKneeAngle = rightHipAngle < 0
                ? this.lerp(50, 110, r(8)) * prefs.legMovement
                : this.lerp(15, 60, r(8)) * prefs.legMovement;
            rightHipOffsetX = this.lerp(-12, 12, r(72)) * energy;
        }

        let leftHipAngle, leftKneeAngle, leftHipOffsetX;
        if (!isRightLegSupporting) {
            leftHipAngle = prefs.symmetry > 0.6
                ? -rightHipAngle
                : this.lerp(-20, 20, r(9)) * energy * prefs.legMovement * 0.7;
            leftKneeAngle = this.lerp(0, 30, r(10)) * prefs.legMovement * 0.5;
            leftHipOffsetX = prefs.symmetry > 0.6
                ? -rightHipOffsetX
                : this.lerp(-8, 8, r(73)) * energy;
        } else {
            leftHipAngle = prefs.symmetry > 0.6
                ? -rightHipAngle
                : this.lerp(-60, 60, r(9)) * energy * prefs.legMovement;
            leftKneeAngle = prefs.symmetry > 0.6
                ? (rightHipAngle > 0
                    ? this.lerp(50, 110, r(8)) * prefs.legMovement
                    : this.lerp(15, 60, r(8)) * prefs.legMovement)
                : this.lerp(15, 110, r(10)) * prefs.legMovement;
            leftHipOffsetX = prefs.symmetry > 0.6
                ? -rightHipOffsetX
                : this.lerp(-12, 12, r(74)) * energy;
        }

        const leftArmCompensation = rightHipAngle * -0.5;
        const rightArmCompensation = rightHipAngle * 0.5;
        const shoulderBounce = Math.sin(t * Math.PI * 8) * 15 * energy * prefs.shoulderBounce;
        const balanceTilt = -rightHipAngle * 0.3;

        const pose = {
            bodyTilt: balanceTilt + this.lerp(-10, 10, r(1)) * energy * prefs.bodyRotation + hipSway * 0.3,
            bodyRotate: bodyRotate + hipSway * 0.5,
            rightShoulderAngle: 45 + rightArmCompensation + shoulderBounce * 0.5 +
                this.lerp(-80, 80, r(3)) * energy * prefs.armMovement,
            rightElbowAngle: this.lerp(-30, 150, r(4)) * (0.3 + 0.7 * prefs.armMovement),
            leftShoulderAngle: prefs.symmetry > 0.7
                ? -(45 + rightArmCompensation + shoulderBounce * 0.5 +
                    this.lerp(-80, 80, r(3)) * energy * prefs.armMovement)
                : -45 + leftArmCompensation - shoulderBounce * 0.5 +
                    this.lerp(-80, 80, r(5)) * energy * prefs.armMovement,
            leftElbowAngle: prefs.symmetry > 0.7
                ? this.lerp(-30, 150, r(4)) * (0.3 + 0.7 * prefs.armMovement)
                : this.lerp(-30, 150, r(6)) * (0.3 + 0.7 * prefs.armMovement),
            rightHipAngle: rightHipAngle,
            rightKneeAngle: rightKneeAngle,
            rightHipOffsetX: rightHipOffsetX,
            leftHipAngle: leftHipAngle,
            leftKneeAngle: leftKneeAngle,
            leftHipOffsetX: leftHipOffsetX,
            verticalOffset: Math.sin(t * Math.PI * 2) * 15 * energy * prefs.jumpiness,
            headTilt: 0
        };

        return pose;
    }

    lerp(min, max, t) {
        return min + (max - min) * t;
    }

    describePose(pose, index) {
        const descriptions = [];

        if (Math.abs(pose.rightShoulderAngle - 45) > 50) {
            descriptions.push(pose.rightShoulderAngle > 45 ? "right arm up" : "right arm down");
        }
        if (Math.abs(pose.leftShoulderAngle + 45) > 50) {
            descriptions.push(pose.leftShoulderAngle > -45 ? "left arm down" : "left arm up");
        }
        if (Math.abs(pose.rightHipAngle) > 20) {
            descriptions.push(pose.rightHipAngle > 0 ? "right leg forward" : "right leg back");
        }
        if (Math.abs(pose.leftHipAngle) > 20) {
            descriptions.push(pose.leftHipAngle > 0 ? "left leg forward" : "left leg back");
        }
        if (Math.abs(pose.verticalOffset) > 8) {
            descriptions.push(pose.verticalOffset < 0 ? "jump" : "squat");
        }
        if (Math.abs(pose.bodyRotate) > 12) {
            descriptions.push(pose.bodyRotate > 0 ? "turn right" : "turn left");
        }
        if (Math.abs(pose.bodyTilt) > 8) {
            descriptions.push("balance");
        }

        return descriptions.length > 0
            ? `Beat ${index + 1}: ${descriptions.join(", ")}`
            : `Beat ${index + 1}: base stance`;
    }

    generateAllAnimations(poses, id) {
        let css = '';

        css += `@keyframes ${id}-body {\n`;
        css += `    0% { transform: translateY(${poses[0].verticalOffset}px) rotate(${poses[0].bodyRotate}deg); }\n`;
        for (let i = 1; i < poses.length - 1; i++) {
            const percent = (i / (poses.length - 1)) * 100;
            const pose = poses[i];
            css += `    ${percent.toFixed(2)}% { transform: translateY(${pose.verticalOffset}px) rotate(${pose.bodyRotate}deg); }\n`;
        }
        css += `    100% { transform: translateY(${poses[0].verticalOffset}px) rotate(${poses[0].bodyRotate}deg); }\n`;
        css += `}\n\n`;

        css += `@keyframes ${id}-head {\n`;
        css += `    0% { transform: translateX(${poses[0].headTilt}px) rotate(${poses[0].headTilt * 2}deg); }\n`;
        for (let i = 1; i < poses.length - 1; i++) {
            const percent = (i / (poses.length - 1)) * 100;
            const pose = poses[i];
            css += `    ${percent.toFixed(2)}% { transform: translateX(${pose.headTilt}px) rotate(${pose.headTilt * 2}deg); }\n`;
        }
        css += `    100% { transform: translateX(${poses[0].headTilt}px) rotate(${poses[0].headTilt * 2}deg); }\n`;
        css += `}\n\n`;

        const limbs = [
            { name: 'right-shoulder', angle: 'rightShoulderAngle', type: 'rotate' },
            { name: 'right-elbow', angle: 'rightElbowAngle', type: 'rotate' },
            { name: 'left-shoulder', angle: 'leftShoulderAngle', type: 'rotate' },
            { name: 'left-elbow', angle: 'leftElbowAngle', type: 'rotate' },
            { name: 'right-hip', angle: 'rightHipAngle', offset: 'rightHipOffsetX', type: 'both' },
            { name: 'right-knee', angle: 'rightKneeAngle', type: 'rotate' },
            { name: 'left-hip', angle: 'leftHipAngle', offset: 'leftHipOffsetX', type: 'both' },
            { name: 'left-knee', angle: 'leftKneeAngle', type: 'rotate' }
        ];

        limbs.forEach(limb => {
            css += `@keyframes ${id}-${limb.name} {\n`;
            if (limb.type === 'both') {
                css += `    0% { transform: translateX(${poses[0][limb.offset]}px) rotate(${poses[0][limb.angle]}deg); }\n`;
                for (let i = 1; i < poses.length - 1; i++) {
                    const percent = (i / (poses.length - 1)) * 100;
                    const pose = poses[i];
                    css += `    ${percent.toFixed(2)}% { transform: translateX(${pose[limb.offset]}px) rotate(${pose[limb.angle]}deg); }\n`;
                }
                css += `    100% { transform: translateX(${poses[0][limb.offset]}px) rotate(${poses[0][limb.angle]}deg); }\n`;
            } else {
                css += `    0% { transform: rotate(${poses[0][limb.angle]}deg); }\n`;
                for (let i = 1; i < poses.length - 1; i++) {
                    const percent = (i / (poses.length - 1)) * 100;
                    const pose = poses[i];
                    css += `    ${percent.toFixed(2)}% { transform: rotate(${pose[limb.angle]}deg); }\n`;
                }
                css += `    100% { transform: rotate(${poses[0][limb.angle]}deg); }\n`;
            }
            css += `}\n\n`;
        });

        css += `@keyframes ${id}-shadow {\n`;
        css += `    0% {
            transform: translateY(${-poses[0].verticalOffset * 0.3}px) scaleX(${1 - poses[0].verticalOffset * 0.01}) scaleY(${1 - Math.abs(poses[0].verticalOffset) * 0.02});
            opacity: ${0.3 - Math.abs(poses[0].verticalOffset) * 0.008};
        }\n`;
        for (let i = 1; i < poses.length - 1; i++) {
            const percent = (i / (poses.length - 1)) * 100;
            const pose = poses[i];
            css += `    ${percent.toFixed(2)}% {
                transform: translateY(${-pose.verticalOffset * 0.3}px) scaleX(${1 - pose.verticalOffset * 0.01}) scaleY(${1 - Math.abs(pose.verticalOffset) * 0.02});
                opacity: ${0.3 - Math.abs(pose.verticalOffset) * 0.008};
            }\n`;
        }
        css += `    100% {
            transform: translateY(${-poses[0].verticalOffset * 0.3}px) scaleX(${1 - poses[0].verticalOffset * 0.01}) scaleY(${1 - Math.abs(poses[0].verticalOffset) * 0.02});
            opacity: ${0.3 - Math.abs(poses[0].verticalOffset) * 0.008};
        }\n`;
        css += `}\n\n`;

        return css;
    }

    generateSVG(size = 200) {
        const color = this.generateColor();
        const colorStr = `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`;
        const poses = this.generatePoseSequence();
        const physique = this.generatePhysique();
        const id = `dancer-${this.ulid}`;

        const heightScale = physique.height;
        const legScale = physique.legToBodyRatio;

        const headRadius = 18 * heightScale;
        const upperArmLength = 35 * heightScale;
        const lowerArmLength = 30 * heightScale;
        const upperLegLength = 40 * heightScale * legScale;
        const lowerLegLength = 45 * heightScale * legScale;
        const torsoLength = 82 * heightScale;

        const buildScale = physique.build;
        const torsoWidth = 5 * buildScale;
        const armWidth = 4 * buildScale;
        const legWidth = 5 * buildScale;

        const hipY = 50 + torsoLength;
        const animations = this.generateAllAnimations(poses, id);

        return `
            <svg viewBox="0 0 200 ${Math.max(300, hipY + upperLegLength + lowerLegLength + 30)}"
                 width="${size}" height="${size * 1.5}" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        .${id}-container {
                            animation: ${id}-body ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-head {
                            animation: ${id}-head ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-right-arm {
                            animation: ${id}-right-shoulder ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-right-forearm {
                            animation: ${id}-right-elbow ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-left-arm {
                            animation: ${id}-left-shoulder ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-left-forearm {
                            animation: ${id}-left-elbow ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-right-leg {
                            animation: ${id}-right-hip ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-right-shin {
                            animation: ${id}-right-knee ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-left-leg {
                            animation: ${id}-left-hip ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-left-shin {
                            animation: ${id}-left-knee ${this.cycleDuration}s ease-in-out infinite;
                        }
                        .${id}-shadow {
                            animation: ${id}-shadow ${this.cycleDuration}s ease-in-out infinite;
                            transform-origin: center center;
                        }
                        ${animations}
                    </style>
                </defs>

                <ellipse cx="100" cy="${hipY + upperLegLength + lowerLegLength + 10}"
                         rx="${25 * buildScale}" ry="6" fill="rgba(0,0,0,0.3)" class="${id}-shadow"/>

                <g class="${id}-container" transform-origin="100 ${hipY}">
                    <g class="${id}-head" transform-origin="100 50">
                        <line x1="100" y1="${50 + headRadius}" x2="100" y2="${50 + headRadius + 20 * heightScale}"
                              stroke="${colorStr}" stroke-width="${torsoWidth}" stroke-linecap="round"/>
                        <circle cx="100" cy="50" r="${headRadius}" fill="${colorStr}"/>
                    </g>

                    <line x1="100" y1="${50 + headRadius + 14 * heightScale}" x2="100" y2="${hipY}"
                          stroke="${colorStr}" stroke-width="${torsoWidth}" stroke-linecap="round"/>

                    ${(() => {
                        const shoulderY = 50 + headRadius + 17 * heightScale;
                        return `
                    <g class="${id}-right-arm" transform-origin="100 ${shoulderY}">
                        <line x1="100" y1="${shoulderY}" x2="100" y2="${shoulderY + upperArmLength}"
                              stroke="${colorStr}" stroke-width="${armWidth}" stroke-linecap="round"/>
                        <circle cx="100" cy="${shoulderY}" r="${armWidth}" fill="${colorStr}"/>

                        <g class="${id}-right-forearm" transform-origin="100 ${shoulderY + upperArmLength}">
                            <circle cx="100" cy="${shoulderY + upperArmLength}" r="${armWidth * 0.9}" fill="${colorStr}"/>
                            <line x1="100" y1="${shoulderY + upperArmLength}"
                                  x2="100" y2="${shoulderY + upperArmLength + lowerArmLength}"
                                  stroke="${colorStr}" stroke-width="${armWidth * 0.9}" stroke-linecap="round"/>
                            <circle cx="100" cy="${shoulderY + upperArmLength + lowerArmLength}" r="${armWidth * 0.75}" fill="${colorStr}"/>
                        </g>
                    </g>

                    <g class="${id}-left-arm" transform-origin="100 ${shoulderY}">
                        <line x1="100" y1="${shoulderY}" x2="100" y2="${shoulderY + upperArmLength}"
                              stroke="${colorStr}" stroke-width="${armWidth}" stroke-linecap="round"/>
                        <circle cx="100" cy="${shoulderY}" r="${armWidth}" fill="${colorStr}"/>

                        <g class="${id}-left-forearm" transform-origin="100 ${shoulderY + upperArmLength}">
                            <circle cx="100" cy="${shoulderY + upperArmLength}" r="${armWidth * 0.9}" fill="${colorStr}"/>
                            <line x1="100" y1="${shoulderY + upperArmLength}"
                                  x2="100" y2="${shoulderY + upperArmLength + lowerArmLength}"
                                  stroke="${colorStr}" stroke-width="${armWidth * 0.9}" stroke-linecap="round"/>
                            <circle cx="100" cy="${shoulderY + upperArmLength + lowerArmLength}" r="${armWidth * 0.75}" fill="${colorStr}"/>
                        </g>
                    </g>
                        `;
                    })()}

                    <g class="${id}-right-leg" transform-origin="100 ${hipY}">
                        <line x1="100" y1="${hipY}" x2="100" y2="${hipY + upperLegLength}"
                              stroke="${colorStr}" stroke-width="${legWidth}" stroke-linecap="round"/>
                        <circle cx="100" cy="${hipY}" r="${legWidth}" fill="${colorStr}"/>

                        <g class="${id}-right-shin" transform-origin="100 ${hipY + upperLegLength}">
                            <circle cx="100" cy="${hipY + upperLegLength}" r="${legWidth * 0.9}" fill="${colorStr}"/>
                            <line x1="100" y1="${hipY + upperLegLength}"
                                  x2="100" y2="${hipY + upperLegLength + lowerLegLength}"
                                  stroke="${colorStr}" stroke-width="${legWidth * 0.9}" stroke-linecap="round"/>
                            <ellipse cx="102" cy="${hipY + upperLegLength + lowerLegLength + 2}"
                                     rx="${8 * buildScale}" ry="${4 * buildScale}" fill="${colorStr}"/>
                        </g>
                    </g>

                    <g class="${id}-left-leg" transform-origin="100 ${hipY}">
                        <line x1="100" y1="${hipY}" x2="100" y2="${hipY + upperLegLength}"
                              stroke="${colorStr}" stroke-width="${legWidth}" stroke-linecap="round"/>
                        <circle cx="100" cy="${hipY}" r="${legWidth}" fill="${colorStr}"/>

                        <g class="${id}-left-shin" transform-origin="100 ${hipY + upperLegLength}">
                            <circle cx="100" cy="${hipY + upperLegLength}" r="${legWidth * 0.9}" fill="${colorStr}"/>
                            <line x1="100" y1="${hipY + upperLegLength}"
                                  x2="100" y2="${hipY + upperLegLength + lowerLegLength}"
                                  stroke="${colorStr}" stroke-width="${legWidth * 0.9}" stroke-linecap="round"/>
                            <ellipse cx="102" cy="${hipY + upperLegLength + lowerLegLength + 2}"
                                     rx="${8 * buildScale}" ry="${4 * buildScale}" fill="${colorStr}"/>
                        </g>
                    </g>
                </g>
            </svg>
        `;
    }

    getDanceInfo() {
        const energy = this.generateEnergy();
        const prefs = this.generateMovePreferences();
        const color = this.generateColor();
        const poses = this.generatePoseSequence();
        const physique = this.generatePhysique();

        return {
            color: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`,
            energy: energy,
            preferences: prefs,
            physique: physique,
            poses: poses,
            moves: poses.map((pose, i) => this.describePose(pose, i))
        };
    }
}

// Export for both browser and Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SkeletalAnimaID;
}
