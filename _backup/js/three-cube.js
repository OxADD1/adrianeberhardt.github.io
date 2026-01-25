
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';

// Configuration
const CONFIG = {
    colors: {
        background: 0x050505,
        primary: 0xFFC107,    // Gold
        secondary: 0xFF9800,  // Darker Gold/Orange
        accent: 0xFFFFFF,     // White highlights
        details: 0x333333     // Dark details
    },
    bloom: {
        strength: 1.5,
        radius: 0.2,      // Reduced from 0.4 - less spread
        threshold: 0.3    // Increased from 0.1 - only brightest parts glow
    },
    rotationSpeed: 0.002,
    mouseSensitivity: 0.0025 // Increased sensitivity for better feel
};

class CubeScene {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error('Container not found');
            return;
        }

        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;

        this.mouseX = 0;
        this.mouseY = 0;
        this.targetRotationX = 0;
        this.targetRotationY = 0;

        this.init();
        this.createObjects();
        this.initPostProcessing();
        this.addEvents();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        // this.scene.fog = new THREE.FogExp2(0x050505, 0.02);

        this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 1000);
        this.camera.position.z = 8;
        this.camera.position.y = 0;

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.width, this.height);
        // OPTIMIZATION: Cap PixelRatio at 1.5 for performance. 
        // Rendering Bloom at full Retina (2x/3x) is too expensive.
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        // Tone mapping for better glow dynamic range
        this.renderer.toneMapping = THREE.ReinhardToneMapping;
        this.container.appendChild(this.renderer.domElement);

        const pointLight = new THREE.PointLight(CONFIG.colors.primary, 2, 100);
        pointLight.position.set(5, 5, 5);
        this.scene.add(pointLight);

        const blueLight = new THREE.PointLight(0x4488ff, 1, 100);
        blueLight.position.set(-5, -5, 5);
        this.scene.add(blueLight);

        const ambientLight = new THREE.AmbientLight(0x222222);
        this.scene.add(ambientLight);
    }

    createObjects() {
        this.mainGroup = new THREE.Group();
        this.scene.add(this.mainGroup);

        // 1. Central Core (Icosahedron) - The "Data Heart"
        const coreGeo = new THREE.IcosahedronGeometry(1, 1);
        const coreMat = new THREE.MeshStandardMaterial({
            color: 0x000000,
            emissive: CONFIG.colors.primary,
            emissiveIntensity: 1.0, // Stronger glow
            roughness: 0.2,
            metalness: 1.0,
            wireframe: true
        });
        this.core = new THREE.Mesh(coreGeo, coreMat);
        this.mainGroup.add(this.core);

        // 2. Inner Shell (Box) - Dark Glassy
        const boxGeo = new THREE.BoxGeometry(2.5, 2.5, 2.5);
        const boxMat = new THREE.MeshPhysicalMaterial({
            color: 0x111111,
            metalness: 0.9,
            roughness: 0.1,
            transparent: true,
            opacity: 0.3,
            side: THREE.BackSide
        });
        this.innerBox = new THREE.Mesh(boxGeo, boxMat);
        this.mainGroup.add(this.innerBox);

        // 3. Wired Cage (Larger Box) - FAT LINES for thickness
        const cageGeoRaw = new THREE.BoxGeometry(3, 3, 3, 2, 2, 2);
        const wireframeGeo = new THREE.WireframeGeometry(cageGeoRaw);

        const lineGeo = new LineSegmentsGeometry();
        lineGeo.setPositions(wireframeGeo.attributes.position.array);

        this.cageMat = new LineMaterial({
            color: CONFIG.colors.primary,
            linewidth: 2, // Thinner (was 4)
            resolution: new THREE.Vector2(this.width, this.height), // Required for Line2
            dashed: false,
            transparent: true,
            opacity: 0.8,
            depthTest: false // FORCE VISIBILITY: Draw lines on top of everything
        });

        this.cage = new LineSegments2(lineGeo, this.cageMat);
        this.cage.computeLineDistances();
        this.mainGroup.add(this.cage);



        // Particles removed - moved to separate background layer
    }

    initPostProcessing() {
        this.composer = new EffectComposer(this.renderer);

        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(this.width, this.height),
            CONFIG.bloom.strength,
            CONFIG.bloom.radius,
            CONFIG.bloom.threshold
        );
        this.composer.addPass(bloomPass);
    }

    addEvents() {
        window.addEventListener('resize', () => {
            this.width = this.container.clientWidth;
            this.height = this.container.clientHeight;

            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(this.width, this.height);
            this.composer.setSize(this.width, this.height);

            // Update resolution for fat lines
            if (this.cage && this.cage.material) {
                this.cage.material.resolution.set(this.width, this.height);
            }
        });

        document.addEventListener('mousemove', (e) => {
            this.mouseX = (e.clientX - window.innerWidth / 2) * CONFIG.mouseSensitivity;
            this.mouseY = (e.clientY - window.innerHeight / 2) * CONFIG.mouseSensitivity;
        });

        // Add Touch Support
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouseX = (e.touches[0].clientX - window.innerWidth / 2) * CONFIG.mouseSensitivity;
                this.mouseY = (e.touches[0].clientY - window.innerHeight / 2) * CONFIG.mouseSensitivity;
            }
        }, { passive: true });

        // Add Touch Support
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouseX = (e.touches[0].clientX - window.innerWidth / 2) * CONFIG.mouseSensitivity;
                this.mouseY = (e.touches[0].clientY - window.innerHeight / 2) * CONFIG.mouseSensitivity;
            }
        }, { passive: true });

        // Loop management via IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.isVisible = true;
                    if (!this.animationId) this.animate();
                } else {
                    this.isVisible = false;
                    // Animation loop will stop itself
                }
            });
        }, { threshold: 0 });

        observer.observe(this.container);
    }

    animate() {
        if (!this.isVisible) {
            this.animationId = null;
            return;
        }

        this.animationId = requestAnimationFrame(() => this.animate());

        const time = Date.now() * 0.001;

        // Core Heartbeat
        const scale = 1 + Math.sin(time * 2) * 0.1;
        this.core.scale.set(scale, scale, scale);

        // Rotations
        this.core.rotation.y += 0.01;
        this.core.rotation.z += 0.005;

        this.innerBox.rotation.x += 0.002;
        this.innerBox.rotation.y += 0.002;

        this.cage.rotation.x -= 0.002;
        this.cage.rotation.y -= 0.002;





        // Mouse Interaction
        this.targetRotationX = this.mouseY * 0.8;
        this.targetRotationY = this.mouseX * 0.8;

        this.mainGroup.rotation.x += 0.05 * (this.targetRotationX - this.mainGroup.rotation.x);
        this.mainGroup.rotation.y += 0.05 * (this.targetRotationY - this.mainGroup.rotation.y);

        this.composer.render();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CubeScene('three-canvas-container');
});
