import { 
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection
} from '@/components';
import React from 'react';

const Home = () => {
  return (
    <div className = "flex flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
};

export default Home;