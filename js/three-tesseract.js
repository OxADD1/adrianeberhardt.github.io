
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// Configuration
const CONFIG = {
    colors: {
        background: 0x050505,
        primary: 0xFFC107,    // Gold
        secondary: 0xFF9800   // Orange-Gold
    },
    bloom: {
        strength: 2.0,        // Strong Neon
        radius: 0.4,
        threshold: 0.1
    },
    rotationSpeed: 0.002,
    mouseSensitivity: 0.0025
};

class Scene3D {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        this.mouseX = 0;
        this.mouseY = 0;

        this.init();
        this.createTesseract();
        this.initPostProcessing();
        this.addEvents();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.1, 1000);
        this.camera.position.z = 7;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.mainGroup = new THREE.Group();
        this.scene.add(this.mainGroup);
    }

    createTesseract() {
        const material = new THREE.LineBasicMaterial({
            color: CONFIG.colors.primary,
            transparent: true,
            opacity: 1.0
        });

        // 1. Outer Cube
        const outerGeo = new THREE.BoxGeometry(3.5, 3.5, 3.5);
        const outerEdges = new THREE.EdgesGeometry(outerGeo);
        this.outerCube = new THREE.LineSegments(outerEdges, material);
        this.mainGroup.add(this.outerCube);

        // 2. Inner Cube
        const innerGeo = new THREE.BoxGeometry(1.8, 1.8, 1.8);
        const innerEdges = new THREE.EdgesGeometry(innerGeo);
        this.innerCube = new THREE.LineSegments(innerEdges, material);
        this.mainGroup.add(this.innerCube);

        // 3. Connectors (Corner to Corner)
        // We need to calculate vertex positions manually or use a helper
        const connectorsGeo = new THREE.BufferGeometry();
        const positions = [];

        // Define corners for a unit cube then scale
        const corners = [
            [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
            [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1]
        ];

        corners.forEach(corner => {
            // Outer corner pos
            const ox = corner[0] * 3.5 / 2;
            const oy = corner[1] * 3.5 / 2;
            const oz = corner[2] * 3.5 / 2;

            // Inner corner pos
            const ix = corner[0] * 1.8 / 2;
            const iy = corner[1] * 1.8 / 2;
            const iz = corner[2] * 1.8 / 2;

            positions.push(ox, oy, oz);
            positions.push(ix, iy, iz);
        });

        connectorsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        this.connectors = new THREE.LineSegments(connectorsGeo, material);
        this.mainGroup.add(this.connectors); // Add to group to rotate with everything? No, we want distinct rotation

        // Actually, for a Tesseract feeling, usually the inner/outer cubes rotate together?
        // Or if we rotate the whole GROUP, it's just a rigid body.
        // Let's attach connectors to the main group so it's a rigid object first.

        this.object = this.mainGroup;

        // Particles
        this.createParticles();
    }

    createParticles() {
        const geo = new THREE.BufferGeometry();
        const count = 30;
        const positions = [];
        for (let i = 0; i < count; i++) {
            const r = 6;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            positions.push(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta),
                r * Math.cos(phi)
            );
        }
        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        const mat = new THREE.PointsMaterial({
            color: CONFIG.colors.primary,
            size: 0.1,
            transparent: true,
            opacity: 0.5
        });
        this.particles = new THREE.Points(geo, mat);
        this.mainGroup.add(this.particles);
    }

    initPostProcessing() {
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        this.composer.addPass(new UnrealBloomPass(
            new THREE.Vector2(this.width, this.height),
            CONFIG.bloom.strength, CONFIG.bloom.radius, CONFIG.bloom.threshold
        ));
    }

    addEvents() {
        window.addEventListener('resize', () => {
            this.width = this.container.clientWidth;
            this.height = this.container.clientHeight;
            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.width, this.height);
            this.composer.setSize(this.width, this.height);
        });

        document.addEventListener('mousemove', (e) => {
            this.mouseX = (e.clientX - window.innerWidth / 2) * CONFIG.mouseSensitivity;
            this.mouseY = (e.clientY - window.innerHeight / 2) * CONFIG.mouseSensitivity;
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const time = Date.now() * 0.001;

        if (this.object) {
            // Complex 4D Rotation Effect
            // We rotate the whole group
            this.object.rotation.x = time * 0.2;
            this.object.rotation.y = time * 0.3;

            // To make it look 'alive', we could pulse the inner cube
            // const scale = 1 + Math.sin(time * 2) * 0.1;
            // this.innerCube.scale.set(scale, scale, scale);
            // Updating connectors would be expensive though.

            // Mouse Interaction
            this.mainGroup.rotation.x += 0.05 * (this.mouseY - this.mainGroup.rotation.x);
            this.mainGroup.rotation.y += 0.05 * (this.mouseX - this.mainGroup.rotation.y);
        }

        if (this.particles) {
            this.particles.rotation.y = -time * 0.1;
        }

        this.composer.render();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Scene3D('three-canvas-container');
});
