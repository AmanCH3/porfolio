import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const tools = [
  "Python", "SQL", "Tableau", "Power BI", "Excel",
  "Pandas", "R", "Snowflake", "Looker",
];

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Codveda Technologies",
    period: "Mar 2026 – Present",
    location: "Remote",
    bullets: [
      "Contributing to data analysis and reporting tasks in a live production environment using SQL and Python.",
      "Assisting in building and maintaining dashboards to track business KPIs for internal stakeholders.",
      "Collaborating with the data team remotely, applying data cleaning and wrangling techniques on real datasets."
    ]
  },
  {
    role: "Data Specialist",
    company: "Deloitte Australia (Forage Virtual Program)",
    period: "Aug – Dec 2025",
    location: "",
    bullets: [
      "Analyzed complex datasets for a telecom client, identifying trends that led to a 15% improvement in customer retention.",
      "Created interactive Power BI dashboards to visualize KPIs, enabling stakeholders to make data-driven decisions.",
      "Performed advanced data cleaning on 500K+ records using Python and R, improving data quality by 30%.",
      "Developed SQL queries that reduced report generation time by 40%."
    ]
  },
  {
    role: "Data Science Specialist",
    company: "Commonwealth Bank (Forage Virtual Program)",
    period: "Sep – Dec 2025",
    location: "",
    bullets: [
      "Built predictive models using Python (scikit-learn) to forecast customer behavior with 85% accuracy.",
      "Conducted EDA on financial datasets, uncovering patterns that informed business strategies.",
      "Implemented data preprocessing pipelines including feature engineering, normalization, and missing value handling.",
      "Presented findings to simulated stakeholders using Tableau visualizations."
    ]
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        {/* Tools row */}
        <motion.div
          className="about__trusted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="about__trusted-left">
            <span className="section-label">TOOLS I USE</span>
            <p className="about__trusted-note">
              Industry-leading tools for scalable data solutions and impactful analyses.
            </p>
          </div>
          <div className="about__trusted-tags">
            {tools.map(tool => (
              <span className="tag" key={tool}>
                <span className="tag__dot"></span>
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="divider" style={{ margin: '2rem 0' }}></div>

        {/* About + Summary */}
        <div className="about__grid">
          <motion.div
            className="about__left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">
              CRAFTING MEANINGFUL<br />
              DATA <span className="script">&amp; Intuitive</span><br />
              INSIGHTS
            </h2>
          </motion.div>

          <motion.div
            className="about__right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="about__intro">
              I'm Aman Chaudhary — an Associate Data Analyst with a BSc (Hons) in Computing from Coventry University, focused on Data Science &amp; Analytics.
            </p>
            <p className="about__body">
              Currently interning at Codveda Technologies, I have demonstrated the ability to clean and analyze large datasets, build interactive dashboards, and translate complex data into actionable business insights. My work at Deloitte Australia and Commonwealth Bank delivered a 15% retention improvement, 40% reduction in report generation time, and predictive models with 85% accuracy. I'm seeking a full-time Data Analyst role in tech or finance where I can drive measurable impact with data.
            </p>
          </motion.div>
        </div>

        <div className="divider" style={{ margin: '2rem 0' }}></div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">PROFESSIONAL EXPERIENCE</span>
        </motion.div>

        <div className="experience__list">
          {experiences.map((exp, i) => (
            <motion.div
              className="experience__card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="experience__header">
                <div>
                  <h3 className="experience__role">{exp.role}</h3>
                  <p className="experience__company">{exp.company}</p>
                </div>
                <span className="experience__period">
                  <FaCalendarAlt style={{ marginRight: '0.4rem', fontSize: '0.7rem' }} />
                  {exp.period}
                </span>
              </div>
              <ul className="experience__bullets">
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
