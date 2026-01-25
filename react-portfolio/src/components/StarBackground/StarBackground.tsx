import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import './StarBackground.css';

function Stars() {
    const ref = useRef<THREE.Points>(null);

    // Generate random star positions
    const particles = useMemo(() => {
        const positions = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 50;
            positions[i3 + 1] = (Math.random() - 0.5) * 50;
            positions[i3 + 2] = (Math.random() - 0.5) * 50;
        }
        return positions;
    }, []);

    // Animate rotation
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta * 0.02;
            ref.current.rotation.y -= delta * 0.03;
        }
    });

    return (
        <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#FFC107"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    );
}

export default function StarBackground() {
    return (
        <div className="star-background">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <Stars />
            </Canvas>
        </div>
    );
}
