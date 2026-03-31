import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Environment } from '@react-three/drei';

const Shape = ({ position, color, speed, distort, radius, type = 'sphere' }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(time / 4) * 0.2;
    meshRef.current.rotation.y = Math.sin(time / 2) * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      {type === 'sphere' ? (
        <Sphere ref={meshRef} args={[radius, 64, 64]} position={position}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={distort}
            speed={speed}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      ) : (
        <Torus ref={meshRef} args={[radius, 0.3, 16, 100]} position={position}>
          <MeshWobbleMaterial
            color={color}
            attach="material"
            factor={0.4}
            speed={speed}
            roughness={0.1}
            metalness={0.8}
          />
        </Torus>
      )}
    </Float>
  );
};

const PortfolioCanvas = () => {
  return (
    <div className="portfolio-3d-bg">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#64ffda" intensity={1} />
        
        <Suspense fallback={null}>
          <Shape position={[-4, 2, -2]} color="#1d4ed8" speed={1} distort={0.4} radius={1} />
          <Shape position={[5, -3, -1]} color="#64ffda" speed={1.5} distort={0.2} radius={1.2} type="torus" />
          <Shape position={[2, 3, -3]} color="#0c1a30" speed={0.8} distort={0.5} radius={0.8} />
          <Shape position={[-3, -4, -2]} color="#4a5568" speed={1.2} distort={0.3} radius={0.5} type="torus" />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PortfolioCanvas;
