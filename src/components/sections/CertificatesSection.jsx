import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

// Logo resolver: returns an img tag with the org logo or a fallback icon
const OrgLogo = ({ issuer }) => {
  const logos = {
    DataCamp: (
      <img
        src="https://mma.prnewswire.com/media/2394361/DataCamp_Logo.jpg?p=facebook"
        alt="DataCamp"
        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
        onError={e => { e.currentTarget.style.display = 'none'; }}
      />
    ),
    Freecodecamp: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg"
        alt="freeCodeCamp"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onError={e => { e.currentTarget.style.display = 'none'; }}
      />
    ),
    'Dataquest.io': (
      <img
        src="https://www.dataquest.io/wp-content/uploads/2023/02/DQ-Logo.svg"
        alt="Dataquest"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onError={e => { e.currentTarget.style.display = 'none'; }}
      />
    ),
    Forage: (
      <img
        src="https://cdn.brandfetch.io/id8fMRXGQ2/w/400/h/400/theme/dark/icon.png"
        alt="Forage"
        className="cert-org-logo"
        onError={e => { e.currentTarget.style.display = 'none'; }}
      />
    ),
  };

  return (
    <div className="cert-card__icon">
      {logos[issuer] || <FaGraduationCap />}
    </div>
  );
};

const certificates = [
  {
    id: 1,
    name: "Associate Data Analyst Certified",
    issuer: "DataCamp",
    year: "Mar 2026",
    link: "https://www.datacamp.com/certificate/DAA0015319179645"
  },
  {
    id: 2,
    name: "Data Analyst in Tableau",
    issuer: "DataCamp",
    year: "Oct 2025",
    link: "https://www.datacamp.com/statement-of-accomplishment/track/a446ff0b78ea407999a793ca0d65aced9ce14ab8?raw=1"
  },
  {
    id: 3,
    name: "Data Analyst in Python",
    issuer: "Freecodecamp",
    year: "Feb 2024",
    link: "https://www.freecodecamp.org/certification/AmanCH/data-analysis-with-python-v7"
  },
  {
    id: 4,
    name: "Tableau Case Studies",
    issuer: "DataCamp",
    year: "Mar 2026",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cad19b1b2249f9cb173c39975a4bcc5c8fff2a25"
  },
  {
    id: 5,
    name: "Data Literacy Certified",
    issuer: "DataCamp",
    year: "Dec 2025",
    link: "https://www.datacamp.com/skill-verification/DL0038139913195"
  },
  {
    id: 6,
    name: "SQL Skills for Data Analysis",
    issuer: "Dataquest.io",
    year: "Mar 2025",
    link: "https://app.dataquest.io/view_cert/J5ARPILKM58YVFL8T57R"
  },
  {
    id: 7,
    name: "Introduction to Supervised ML in Python",
    issuer: "Dataquest.io",
    year: "Jul 2025",
    link: "https://app.dataquest.io/view_cert/LBMWGN773D3WTCRVGUH3"
  },
  {
    id: 8,
    name: "Deloitte Australia Data Analytics Simulation",
    issuer: "Forage",
    year: "Aug 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_KWA5mbnuJzHhdoaW7_1756206824721_completion_certificate.pdf"
  },
  {
    id: 9,
    name: "Commonwealth Bank Data Science Simulation",
    issuer: "Forage",
    year: "Aug 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2sNmYuurxgpFYawco/smwfytX3mcLboA9bf_2sNmYuurxgpFYawco_KWA5mbnuJzHhdoaW7_1756318784700_completion_certificate.pdf"
  },
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
            <div className="education__icon education__icon--logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsx4ghNeFawUnHoTGkFIwsO0YfKKbuuTSc9w&s"
                alt="Coventry University"
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
                onError={e => { e.currentTarget.replaceWith(Object.assign(document.createElement('span'), { innerHTML: '🎓' })); }}
              />
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
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              key={cert.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <OrgLogo issuer={cert.issuer} />
              <div className="cert-card__info">
                <h3 className="cert-card__name">{cert.name}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
              </div>
              <div className="cert-card__year">{cert.year}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
