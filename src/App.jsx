import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import MountainParallax from './components/sections/MountainParallax';
import AboutSection from './components/sections/AboutSection';

import CaseStudiesSection from './components/sections/CaseStudiesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ContactSection from './components/sections/ContactSection';
import SmoothScroll from './components/layout/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <Layout>
        <main>
          <HeroSection />
          <MountainParallax />
          <AboutSection />
          <CaseStudiesSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </main>
      </Layout>
    </SmoothScroll>
  );
}

export default App;