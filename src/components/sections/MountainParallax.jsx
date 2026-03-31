import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Sections.css';

const MountainParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const mountain1 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const mountain2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mountain3 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const mountain4 = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <div ref={ref} className="mountain-parallax">
      <div className="mountain-parallax__inner">
        {/* Sky/Background */}
        <div className="mountain-parallax__layer mountain-parallax__sky" />

        {/* Far Mountains (Most distant, slowest) */}
        <motion.div style={{ y: mountain3 }} className="mountain-parallax__layer">
          <svg viewBox="0 0 1440 320" className="mountain-svg mountain-svg--far">
            <path fill="#2D1B69" opacity="0.3" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,224C672,245,768,235,864,208C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Mid Mountains */}
        <motion.div style={{ y: mountain2 }} className="mountain-parallax__layer">
          <svg viewBox="0 0 1440 320" className="mountain-svg mountain-svg--mid">
            <path fill="#1B0E4D" opacity="0.6" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,224C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Close Mountains */}
        <motion.div style={{ y: mountain1 }} className="mountain-parallax__layer">
          <svg viewBox="0 0 1440 320" className="mountain-svg mountain-svg--close">
            <path fill="#0A0526" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,266.7C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Solid Foreground (Fastest) */}
        <motion.div style={{ y: mountain4 }} className="mountain-parallax__layer mountain-parallax__bottom" />
      </div>
    </div>
  );
};

export default MountainParallax;
