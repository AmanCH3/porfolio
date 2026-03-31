import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaChartBar } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__left">
          <p className="footer__brand">AMAN CHAUDHARY</p>
          <p className="footer__copy">© {new Date().getFullYear()} Aman Chaudhary. All rights reserved.</p>
        </div>
        <div className="footer__socials">
          <a href="mailto:amanxchau1@gmail.com" className="hero__social-icon" title="Email"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/aman-chaudhary-2811b5267/" target="_blank" rel="noopener noreferrer" className="hero__social-icon" title="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/AmanCH3" target="_blank" rel="noopener noreferrer" className="hero__social-icon" title="GitHub"><FaGithub /></a>
          <a href="https://public.tableau.com" target="_blank" rel="noopener noreferrer" className="hero__social-icon" title="Tableau"><FaChartBar /></a>
        </div>
        <div className="footer__right">
          <a href="mailto:amanxchau1@gmail.com" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
