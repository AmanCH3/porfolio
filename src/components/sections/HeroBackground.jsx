import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import './HeroBackground.css';

const HeroBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse to -0.5 to 0.5
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Layers data: factor is the "speed" of movement
  const layers = [
    { id: 1, color: '#081221', factor: 15, scale: 1.3 },
    { id: 2, color: '#0c1a30', factor: 35, scale: 1.2 },
    { id: 3, color: '#112240', factor: 60, scale: 1.1 },
    { id: 4, color: '#1a365d', factor: 90, scale: 1.05 },
    { id: 5, color: '#234e8c', factor: 130, scale: 1.0 },
  ];

  return (
    <div className="hero-bg">
      {layers.map((layer, i) => (
        <Layer 
          key={layer.id} 
          layer={layer} 
          springX={springX} 
          springY={springY} 
          index={i} 
        />
      ))}
      <div className="hero-bg__overlay" />
    </div>
  );
};

// Sub-component for each layer to properly use motion values
const Layer = ({ layer, springX, springY, index }) => {
  const x = useTransform(springX, (v) => v * layer.factor);
  const y = useTransform(springY, (v) => v * layer.factor);

  return (
    <motion.div
      className="hero-bg__layer"
      style={{
        backgroundColor: layer.color,
        x,
        y,
        zIndex: index,
        scale: layer.scale,
      }}
    >
      <div className={`hero-bg__shape hero-bg__shape--${index}`} />
    </motion.div>
  );
};

export default HeroBackground;
