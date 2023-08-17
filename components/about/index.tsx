"use client"

import React from 'react';
import { Container } from "@/components";
import AboutMe from './profie';
import Services from './services';
import WorkExperience from './experience';

const AboutSection = () => {
  return (
    <section 
      id = "about"
      className = "w-full h-full"
    >
      <Container>
        <div className = "sm:mt-20 ease-in-out duration-500 space-y-20">
          <AboutMe />
          <Services />
          <WorkExperience />
        </div>
      </Container>
    </section>
  )
}

export default AboutSection;