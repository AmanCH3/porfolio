import { ReactLenis } from 'lenis/react';

function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.5, 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
    }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
