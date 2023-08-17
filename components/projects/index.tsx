"use client"

import React, { 
  useState,
  useEffect
} from 'react';
import { Container } from "@/components";
import { projects } from '@/constants';
import Image from 'next/image';
import ProjectModal from './modal';

const ProjectsSection = () => {
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ projectID, setProjectID ] = useState<number>(0);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [ isModalOpen ]);

  return (
    <section 
      id = "projects"
      className = "w-full h-full"
    >
      <Container>
        <div className = "sm:mt-20 space-y-10 mb-16">
          <h2 className = "text-3xl">
            Projects
          </h2>
          <div className = "grid grid-cols-1 sm:grid-cols-2 gap-20 w-full">
            { projects.map((val, i) => {
              return (
                <div 
                  className = "w-full space-y-4"
                  key = { i }
                >
                  <div className = "w-full relative overflow-hidden hover:border-white rounded-lg border border-[#2C3031] duration-500 ease-in-out">
                    <Image 
                      src = { val.thumbnail }
                      alt = { "thumbnail" + (i + 1) }
                      className = "grayscale duration-500 transition-all transform ease-in-out cursor-pointer scale-100 hover:grayscale-0 hover:scale-125"
                      onClick = {() => {
                        setIsModalOpen(!isModalOpen);
                        setProjectID(i);
                      }}
                      priority
                    />
                  </div>
                  <div className = "w-full flex justify-between items-center gap-4">
                    <span>
                      { val.name }
                    </span>
                    <span>
                      { val.year } Project
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
      { isModalOpen && (
        <ProjectModal
          onClose = {() => setIsModalOpen(!isModalOpen)} 
          projectID = { projectID }
        />
      )}
    </section>
  )
};

export default ProjectsSection;