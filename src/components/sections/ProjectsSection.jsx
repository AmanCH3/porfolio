import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaFilePdf, FaChartBar, FaGithub } from 'react-icons/fa6';

const projects = [
  {
    id: 1,
    title: "Retail Purchasing Behavior — ML Thesis",
    category: "PYTHON / MACHINE LEARNING",
    description: "Built a behaviour-aware ML model to predict purchase intent in men's electronics retail, integrating dwell time, shopper movement, and in-store interaction patterns. Demonstrated that behavioural indicators outperform traditional demographics as predictors.",
    tech: ["Python", "scikit-learn", "EDA", "Feature Engineering"],
    image: "/images/project-ml-thesis.png",
    link: "/Retail.pdf",
    linkType: "pdf",
    linkLabel: "View Report"
  },
  {
    id: 2,
    title: "Town Recommendation System (UK)",
    category: "R / DATA ANALYSIS",
    description: "Cleaned and integrated 5+ UK government datasets (house prices, crime, broadband, school scores) using R. Built a weighted scoring algorithm with percent-rank normalization, ranking 70+ towns — identifying Colyton as the top recommendation (OverallScore: 0.92).",
    tech: ["R", "dplyr", "ggplot2", "Linear Regression"],
    image: "/images/project-town-uk.png",
    link: "/town-analysis.pdf",
    linkType: "pdf",
    linkLabel: "View Report"
  },
  {
    id: 3,
    title: "Job Market Analysis Dashboard",
    category: "TABLEAU",
    description: "Built a Tableau dashboard analyzing job posting trends, top-paying industries, and in-demand skills from a large dataset. Identified actionable insights on skill demand, salary distribution, and hiring patterns across sectors.",
    tech: ["Tableau", "Data Viz", "EDA"],
    image: "/images/project-dashboard.png",
    link: "https://public.tableau.com/app/profile/aman.chaudhary5705/viz/JobAnalysis_17587299262730/JobAnalytics",
    linkType: "tableau",
    linkLabel: "View Dashboard"
  },
  {
    id: 4,
    title: "Market Basket Analysis — Munchys Pet Supply",
    category: "TABLEAU / ANALYTICS",
    description: "Built an executive dashboard across 1.55M in total sales revealing a 27.50% profit margin. Discovered a high-strength cross-sell pairing (correlation = 0.9) and shipping what-if analysis revealing potential savings of $58K through packaging optimization.",
    tech: ["Tableau", "Market Basket", "What-If Analysis"],
    image: "/images/project-basket.png",
    link: "https://public.tableau.com/app/profile/aman.chaudhary5705/viz/EcommerceAnalysis_17720822340580/MunchysPetSupplyExecutiveDashboard",
    linkType: "tableau",
    linkLabel: "View Dashboard"
  },
  {
    id: 5,
    title: "Customer Churn Rate Analysis",
    category: "PYTHON / SQL / TABLEAU",
    description: "Analyzed 6,687 customers and identified an overall churn rate of 26.86%. Discovered California's critical 75% churn rate among international plan users and found competitive offers — not service quality — were the leading churn driver.",
    tech: ["Python", "SQL", "Tableau"],
    image: "/images/project-churn.png",
    link: "https://public.tableau.com/app/profile/aman.chaudhary5705/viz/ChurnCustomerAnalysis_17575950054100/Story1",
    linkType: "tableau",
    linkLabel: "View Dashboard"
  },
  {
    id: 6,
    title: "Heart Disease Prediction",
    category: "PYTHON / MACHINE LEARNING",
    description: "Applied supervised ML models (logistic regression, random forest) to predict heart disease risk, achieving strong AUC scores across cross-validated test sets.",
    tech: ["Python", "scikit-learn", "Logistic Regression", "Random Forest"],
    image: "/images/project-ml-thesis.png",
    link: "https://github.com/AmanCH3/Heart-Disease-Prediction",
    linkType: "github",
    linkLabel: "View on GitHub"
  },
];

const linkIcon = (type) => {
  if (type === 'pdf') return <FaFilePdf />;
  if (type === 'github') return <FaGithub />;
  return <FaChartBar />;
};

const ProjectsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="projects" className="projects-scroll-container">
      <div className="projects-sticky-wrapper">
        <div className="container">
          <motion.div
            className="projects__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="projects__header-left">
              <span className="section-label">PORTFOLIO</span>
              <h2 className="section-heading">
                Key <span className="script">Projects</span>
              </h2>
            </div>
            <p className="projects__header-desc">
              Real-world data analysis projects — each built to deliver actionable, measurable insights through dashboards, ML models, and statistical analysis.
            </p>
          </motion.div>
        </div>

        {/* Horizontal flex row */}
        <div className="projects-horizontal-scroll">
          <motion.div style={{ x }} className="projects__flex-row">
            {projects.map((project) => (
              <div className="project-card-horizontal" key={project.id}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  <div className="project-card__image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card__img"
                    />
                    <span className="project-card__category">{project.category}</span>
                    <span className="project-card__link-badge">
                      {linkIcon(project.linkType)}
                      {project.linkLabel}
                    </span>
                  </div>
                  <div className="project-card__body">
                    <div className="project-card__title-row">
                      <h3 className="project-card__title">{project.title}</h3>
                      <span className="project-card__arrow">{linkIcon(project.linkType)}</span>
                    </div>
                    <p className="project-card__desc">{project.description}</p>
                    <div className="project-card__tags">
                      {project.tech.map(t => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
