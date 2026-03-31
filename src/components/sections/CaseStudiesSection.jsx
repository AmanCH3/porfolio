import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaLightbulb, FaCogs } from 'react-icons/fa';

const caseStudies = [
  {
    id: 1,
    title: "Optimizing Supply Chain Logistics",
    category: "DATA STRATEGY",
    challenge: "A national retailer was losing 15% of margin due to inefficient routing and inventory stockouts.",
    solution: "Developed an interactive Tableau dashboard integrating live shipping data from 5 APIs to highlight bottlenecks.",
    impact: "Reduced delivery times by 22% and increased overall margin by 5% within the first quarter of deployment.",
    icon: <FaChartLine />
  },
  {
    id: 2,
    title: "Predictive Maintenance for Manufacturing",
    category: "MACHINE LEARNING",
    challenge: "Unplanned downtime on manufacturing machinery was costing $10k/hour in lost production.",
    solution: "Built a Random Forest predictive model in Python using historical sensor data to forecast failures 48 hours in advance.",
    impact: "Decreased unplanned downtime by 35%, generating an estimated $1.2M in annual savings.",
    icon: <FaCogs />
  },
  {
    id: 3,
    title: "Customer Segmentation & Personalization",
    category: "ANALYTICS",
    challenge: "Marketing campaigns were showing diminishing returns with a low 2% conversion rate on broad emails.",
    solution: "Applied K-Means clustering in Python to segment 500k+ users into 4 distinct behavioural personas.",
    impact: "Boosted campaign conversion rates to 5.4% and customer engagement scores by over 40%.",
    icon: <FaLightbulb />
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">
        <motion.div
          className="case-studies__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">DEEP DIVES</span>
          <h2 className="section-heading">
            Case <span className="script">Studies</span>
          </h2>
          <p className="case-studies__header-desc">
            A closer look at how I approach complex data problems, moving from raw data to strategic, measurable impact.
          </p>
        </motion.div>

        <div className="case-studies__grid">
          {caseStudies.map((study, i) => (
            <motion.div
              className="case-study-card"
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="case-study-card__header">
                <div className="case-study-card__icon">{study.icon}</div>
                <span className="case-study-card__category">{study.category}</span>
              </div>
              
              <h3 className="case-study-card__title">{study.title}</h3>
              
              <div className="case-study-card__content">
                <div className="case-study-card__section">
                  <h4>Challenge</h4>
                  <p>{study.challenge}</p>
                </div>
                <div className="case-study-card__section">
                  <h4>Solution</h4>
                  <p>{study.solution}</p>
                </div>
                <div className="case-study-card__section case-study-card__section--impact">
                  <h4>Impact</h4>
                  <p>{study.impact}</p>
                </div>
              </div>

              <button className="btn btn-outline case-study-card__btn">
                Read Full Study <FaArrowRight style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
