import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const ShootingStar = ({ speed, delay, color }) => {
  const meshRef = useRef();
  const [active, setActive] = useState(false);
  const startTime = useRef(Math.random() * 5); // Random delay
  
  // Create a line geometry for the streak
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([0, 0, 0, -2, -2, 0]); // A 2-unit long streak
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Simple logic to trigger the star at random intervals
    if (!active && time > startTime.current) {
      setActive(true);
      // Randomize start position (top-right area)
      meshRef.current.position.set(
        Math.random() * 20 - 5, // x
        Math.random() * 10 + 5, // y
        -10 // z
      );
    }

    if (active) {
      meshRef.current.position.x -= speed;
      meshRef.current.position.y -= speed;
      
      // Reset after moving out of view
      if (meshRef.current.position.y < -15) {
        setActive(false);
        startTime.current = time + Math.random() * 8 + 2; // Next trigger delay
      }
    }
  });

  return (
    <line ref={meshRef} geometry={lineGeometry} visible={active}>
      <lineBasicMaterial color={color} transparent opacity={0.6} linewidth={2} />
    </line>
  );
};

const HeroStars = () => {
  const starsArray = useMemo(() => Array.from({ length: 12 }), []);

  return (
    <div className="hero-stars">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <color attach="background" args={['#050a12']} />
        
        {/* Background static stars */}
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />

        {/* Dynamic shooting stars */}
        {starsArray.map((_, i) => (
          <ShootingStar 
            key={i} 
            speed={0.15 + Math.random() * 0.25} 
            color={i % 2 === 0 ? "#64ffda" : "#ffffff"} 
          />
        ))}

        <ambientLight intensity={0.5} />
      </Canvas>
      <div className="hero-stars__overlay" />
    </div>
  );
};

export default HeroStars;
