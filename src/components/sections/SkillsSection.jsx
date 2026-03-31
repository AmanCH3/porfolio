import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillColumns = [
  {
    title: "DATA ANALYSIS",
    skills: [
      { name: "SQL / Advanced Queries", level: 90 },
      { name: "Python (Pandas, NumPy)", level: 85 },
      { name: "Excel / Power Query", level: 90 },
      { name: "Data Cleaning & Wrangling", level: 95 },
      { name: "Statistical Analysis / EDA", level: 85 },
    ]
  },
  {
    title: "VISUALIZATION & TOOLS",
    skills: [
      { name: "Tableau / Dashboard Design", level: 90 },
      { name: "Power BI", level: 75 },
      { name: "R (ggplot2, dplyr)", level: 70 },
      { name: "scikit-learn / ML", level: 70 },
      { name: "Git / Snowflake / AWS", level: 65 },
    ]
  }
];

const SkillBar = ({ name, level, delay }) => {
  return (
    <div className="skill-bar">
      <div className="skill-bar__info">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__percent">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill-blue"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <div className="skills__header-dark">
          <motion.h2 
            className="skills__title-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            MY <span className="skills__accent-cyan">SKILLS</span>
          </motion.h2>
          <motion.p 
            className="skills__subtitle-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Proficiency levels across key data analytics tools and technologies — built through hands-on projects, internships, and certified training programs.
          </motion.p>
        </div>

        <div className="skills__columns">
          {skillColumns.map((col, colIdx) => (
            <motion.div
              className="skills__column"
              key={col.title}
              initial={{ opacity: 0, x: colIdx === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h3 className="skills__column-title">{col.title}</h3>
              <div className="skills__bars">
                {col.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
