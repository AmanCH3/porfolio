import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaChartBar } from 'react-icons/fa';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // The form will naturally redirect/submit through FormSubmit.co
    // We just show a small loading state briefly
    setTimeout(() => setIsSubmitting(false), 3000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-heading">
            Let's <span className="script">Connect</span>
          </h2>
          <p className="contact__desc">
            Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left Side: Contact Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact__info-card">
              <h3>Contact Information</h3>
              <p>Fill out the form and I will get back to you within 24 hours.</p>

              <div className="contact__info-items">
                <div className="info-item">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div className="info-text">
                    <span>Email</span>
                    <a href="mailto:amanxchau1@gmail.com">amanxchau1@gmail.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div className="info-text">
                    <span>Location</span>
                    <p>Remote / Open to Relocation</p>
                  </div>
                </div>
              </div>

              <div className="contact__socials">
                <a href="https://www.linkedin.com/in/aman-chaudhary-2811b5267/" target="_blank" rel="noopener noreferrer" className="contact__social-link" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/AmanCH3" target="_blank" rel="noopener noreferrer" className="contact__social-link" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://public.tableau.com/app/profile/aman.chaudhary5705/vizzes" target="_blank" rel="noopener noreferrer" className="contact__social-link" title="Tableau">
                  <FaChartBar />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form 
              action="https://formsubmit.co/amanxchau1@gmail.com" 
              method="POST" 
              className="contact__form"
              onSubmit={handleSubmit}
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="hidden" name="_template" value="table" />
              {/* Try to avoid captcha for better UX, though user will need to confirm email first time */}
              <input type="hidden" name="_captcha" value="false" />

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Hi Aman, I'd like to talk about..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <FaPaperPlane className="btn-icon" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
