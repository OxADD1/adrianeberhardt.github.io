
import * as THREE from 'three';

// Configuration
const CONFIG = {
    color: 0xFFC107, // Gold
    count: 1500,
    spread: 40
};

class StarBackground {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error('Star container not found');
            return;
        }

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.init();
        this.createStars();
        this.animate();
        this.addEvents();
    }

    init() {
        this.scene = new THREE.Scene();
        // Transparent buffer

        this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 1000);
        this.camera.position.z = 10;

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

        this.renderer.domElement.style.pointerEvents = 'none'; // CRITICAL: Ensure no interaction
        this.container.appendChild(this.renderer.domElement);
    }

    createStars() {
        const partGeo = new THREE.BufferGeometry();
        const partCount = CONFIG.count;
        const posArray = new Float32Array(partCount * 3);

        for (let i = 0; i < partCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * CONFIG.spread;
        }

        partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const partMat = new THREE.PointsMaterial({
            size: 0.04,
            color: CONFIG.color,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        this.stars = new THREE.Points(partGeo, partMat);
        this.scene.add(this.stars);
    }

    addEvents() {
        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;

            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(this.width, this.height);
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.stars) {
            this.stars.rotation.y += 0.0005; // Slow rotation
        }

        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new StarBackground('stars-container');
});
