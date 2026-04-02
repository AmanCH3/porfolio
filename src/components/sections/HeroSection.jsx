import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLinkedin, FaGithub, FaChartBar, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import Magnetic from '../common/Magnetic';
import profileImg from '../../assets/profile.jpg';
import './Sections.css';

const stats = [
  { value: "15%", label: "Retention Boost" },
  { value: "40%", label: "Faster Reports" },
  { value: "85%", label: "Model Accuracy" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      {/* Decorative background elements */}
      <div className="hero__bg-decor">
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
        <div className="hero__bg-circle hero__bg-circle--3" />
        <div className="hero__bg-gradient" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero__grid">
          {/* Left: Text Content */}
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__label">HELLO I AM</span>
            
            <h1 className="hero__title">
              Aman<br />
              <span className="gradient-text">Chaudhary</span>
            </h1>

            <p className="hero__role">
              Data Analyst, SQL Expert, Python Developer<br />
              and Tableau Specialist
            </p>

            <div className="hero__cta-row">
              <Magnetic strength={0.2}>
                <a href="#projects" className="btn btn-primary hero__cta-btn">
                  Explore My Work <FaArrowRight />
                </a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <a href="/aman_resume.pdf" download className="btn btn-outline hero__cta-btn">
                  Download CV
                </a>
              </Magnetic>

              <span className="hero__available-badge">
                <FaCheckCircle className="hero__available-icon" />
                Available for Freelance
              </span>
            </div>

            <div className="hero__socials">
              <Magnetic strength={0.4}>
                <a href="https://www.linkedin.com/in/aman-chaudhary-2811b5267/" target="_blank" rel="noopener noreferrer" className="hero__social-icon" title="LinkedIn">
                  <FaLinkedin />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a href="https://github.com/AmanCH3" target="_blank" rel="noopener noreferrer" className="hero__social-icon" title="GitHub">
                  <FaGithub />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a href="https://public.tableau.com/app/profile/aman.chaudhary5705/vizzes" target="_blank" rel="noopener noreferrer" className="hero__social-icon hero__social-icon--tableau" title="Tableau">
                  <FaChartBar />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right: Portrait + Floating elements */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__portrait-wrapper">
              <div className="hero__portrait-ring" />
              <img
                src={profileImg}
                alt="Aman Chaudhary"
                className="hero__portrait-img"
              />
              {/* Floating stat badge */}
              <motion.div
                className="hero__floating-stat"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="hero__floating-stat-value">500K+</span>
                <span className="hero__floating-stat-label">Records Processed</span>
              </motion.div>

              {/* Decorative dots */}
              <div className="hero__decor-dots" />
            </div>
          </motion.div>
        </div>

        {/* Stats row below hero */}
        <motion.div
          className="hero__stats-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, i) => (
            <div className="hero__stat-card" key={i}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
