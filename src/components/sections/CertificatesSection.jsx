import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGraduationCap } from 'react-icons/fa';

const certificates = [
  { id: 1, name: "Associate Data Analyst Certified", issuer: "DataCamp", year: "Mar 2026" },
  { id: 2, name: "Data Analyst in Tableau", issuer: "DataCamp", year: "Oct 2025" },
  { id: 3, name: "Data Analyst in Python", issuer: "Freecodecamp", year: "Feb 2024" },
  { id: 4, name: "Tableau Case Studies", issuer: "DataCamp", year: "Mar 2026" },
  { id: 5, name: "Data Literacy Certified", issuer: "DataCamp", year: "Dec 2025" },
  { id: 6, name: "Data Analysis in Excel", issuer: "DataCamp", year: "Mar 2026" },
  { id: 7, name: "SQL Skills for Data Analysis", issuer: "Dataquest.io", year: "Mar 2025" },
  { id: 8, name: "Introduction to Supervised ML in Python", issuer: "Dataquest.io", year: "Jul 2025" },
  { id: 9, name: "Deloitte Australia Data Analytics Simulation", issuer: "Forage", year: "Aug 2025" },
  { id: 10, name: "Commonwealth Bank Data Science Simulation", issuer: "Forage", year: "Aug 2025" },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        {/* Education */}
        <motion.div
          className="education__block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">EDUCATION</span>
          <div className="education__card">
            <div className="education__icon">
              <FaGraduationCap />
            </div>
            <div className="education__info">
              <h3 className="education__degree">BSc (Hons) Computing</h3>
              <p className="education__school">Coventry University &bull; Graduated March 2026</p>
              <p className="education__focus">Data Science &amp; Analytics Focus</p>
              <p className="education__details">Final-year projects: Town Recommendation System (R) and Retail Purchasing Behavior Research (Python/ML).</p>
            </div>
          </div>
        </motion.div>

        <div className="divider" style={{ margin: '4rem 0' }}></div>

        {/* Certifications */}
        <motion.div
          className="certificates__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">CERTIFICATIONS</span>
          <h2 className="section-heading">
            Professional <span className="script">Credentials</span>
          </h2>
        </motion.div>

        <div className="certificates__list">
          {certificates.map((cert, i) => (
            <motion.div
              className="cert-card"
              key={cert.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="cert-card__icon">
                <FaAward />
              </div>
              <div className="cert-card__info">
                <h3 className="cert-card__name">{cert.name}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
              </div>
              <div className="cert-card__year">{cert.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
