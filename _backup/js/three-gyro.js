
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// Configuration
const CONFIG = {
    colors: {
        background: 0x050505,
        primary: 0xFFC107,    // Gold
        secondary: 0xFF9800   // Orange
    },
    bloom: {
        strength: 2.0,        // Strong Neon
        radius: 0.4,
        threshold: 0.1
    },
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
        this.createGyro();
        this.initPostProcessing();
        this.addEvents();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 1000);
        this.camera.position.z = 9;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.mainGroup = new THREE.Group();
        this.scene.add(this.mainGroup);
    }

    createGyro() {
        const material = new THREE.LineBasicMaterial({
            color: CONFIG.colors.primary,
            transparent: true,
            opacity: 1.0
        });

        // Helper for Ring
        const createRing = (radius, tube) => {
            // TorusGeometry: radius, tube, radialSegments, tubularSegments
            const geo = new THREE.TorusGeometry(radius, tube, 8, 50);
            const edges = new THREE.EdgesGeometry(geo);
            return new THREE.LineSegments(edges, material);
        };

        // Ring 1 (Outer)
        this.ring1 = createRing(3.2, 0.1);
        this.mainGroup.add(this.ring1);

        // Ring 2 (Middle)
        this.ring2 = createRing(2.6, 0.15);
        this.mainGroup.add(this.ring2);

        // Ring 3 (Inner)
        this.ring3 = createRing(2.0, 0.2);
        this.mainGroup.add(this.ring3);

        // Core (Crystal)
        const coreGeo = new THREE.IcosahedronGeometry(1.0, 1); // Faceted
        const coreEdges = new THREE.EdgesGeometry(coreGeo);
        this.core = new THREE.LineSegments(coreEdges, material);
        this.mainGroup.add(this.core);

        // Core Inner Glow (Solid but transparent)
        const glowGeo = new THREE.IcosahedronGeometry(0.8, 2);
        const glowMat = new THREE.MeshBasicMaterial({
            color: CONFIG.colors.secondary,
            transparent: true,
            opacity: 0.2
        });
        const glowMesh = new THREE.Mesh(glowGeo, glowMat);
        this.core.add(glowMesh);

        // Particles
        this.createParticles();
    }

    createParticles() {
        const geo = new THREE.BufferGeometry();
        const count = 40;
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

        if (this.ring1) {
            // Gyroscopic Motion
            this.ring1.rotation.y = time * 0.5;
            this.ring1.rotation.x = Math.sin(time * 0.2) * 0.2;

            this.ring2.rotation.x = time * 0.6;
            this.ring2.rotation.y = Math.cos(time * 0.3) * 0.2;

            this.ring3.rotation.z = time * 0.7;
            this.ring3.rotation.x = time * 0.2;

            this.core.rotation.y = -time;
            this.core.rotation.z = time * 0.5;

            // Mouse Interaction (Whole Group)
            this.mainGroup.rotation.x += 0.05 * (this.mouseY - this.mainGroup.rotation.x);
            this.mainGroup.rotation.y += 0.05 * (this.mouseX - this.mainGroup.rotation.y);
        }

        if (this.particles) {
            this.particles.rotation.y = -time * 0.2;
        }

        this.composer.render();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Scene3D('three-canvas-container');
});
