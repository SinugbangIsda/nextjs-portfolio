"use client"

import React from 'react';
import { Container } from "@/components";
import PoweredBy from './tools';
import Scrolldown from './scrolldown';
import Headline from './headline';

const HeroSection = () => {
  return (
    <section 
      id = "/"
      className = "w-full h-full"
    >
      <div className = "md:mt-10 lg:mt-20">
        <Container>
          <Headline />
          <PoweredBy />
          <Scrolldown />
        </Container>
      </div>
    </section>
  )
}

export default HeroSection;