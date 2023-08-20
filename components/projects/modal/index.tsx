"use client"

import React, {
    useEffect
} from 'react';
import {
    motion,
    AnimatePresence
} from "framer-motion";
import { projects } from '@/constants';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import CloseButton from './closebutton';

interface ProjectModalProps {
    onClose: () => void;
    projectID: number;
}

const variants = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const ProjectModal = ({ 
    onClose,
    projectID
}: ProjectModalProps) => {
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [ handleKeyPress ]);

  return (
    <>
        <AnimatePresence>
            <motion.div 
                variants = { variants }
                initial = "hidden"
                animate = "visible"
                className = "fixed h-full w-full text-white top-0 right-0 z-50 overflow-auto bg-[#17181A] flex flex-col m-auto"
            >
                <div className = "m-auto max-w-6xl w-full grow bg-[#212226] p-8 space-y-8">
                    <CloseButton onClose = { onClose }/>
                    <div className = "flex flex-col items-start xl:p-16 p-2 w-full space-y-10 break-words">
                        <div className = "flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 w-full">
                            <div className = "flex flex-col space-y-4 w-full">
                                <h1 className = "font-bold text-6xl">
                                    { projects[projectID].name }
                                </h1>
                                <span className = "text-[#7D8590] text-5xl">
                                    { projects[projectID].system }
                                </span>
                            </div>
                            <Image 
                                src = { projects[projectID].logo }
                                alt = { projects[projectID].name + "Logo" }
                                className = "hidden sm:block"
                            />
                        </div>
                        <hr className = "border border-[#323339] w-full" />
                        <div className = "space-y-10 w-full">
                            <h3 className = "text-3xl">
                                Project Description
                            </h3>
                            <p className = "text-xl text-justify">
                                { projects[projectID].description }
                            </p>
                            <div className = "flex flex-col sm:flex-row items-center gap-4">
                                { projects[projectID].demo && (
                                    <a 
                                        href = { projects[projectID].demo }
                                        target = "_blank"
                                        aria-label = "demo-link"
                                        className = "px-8 py-4 rounded-full bg-[#2d68ff] text-center hover:text-black hover:bg-white hover:border-white duration-300 w-full sm:w-auto"
                                    >
                                        <span className = "font-semibold">
                                            Live Preview
                                        </span>
                                    </a>
                                )}
                                { projects[projectID].github && (
                                    <a 
                                        href = { projects[projectID].github }
                                        target = "_blank"
                                        aria-label = "githhub-link"
                                        className = "px-8 py-4 rounded-full border border-white flex flex-row justify-center items-center gap-4 hover:text-black hover:bg-white hover:border-white duration-300  w-full sm:w-auto"
                                    >   
                                        <FaGithub className = "text-xl"/>
                                        <span className = "font-semibold">
                                            View Source Code
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className = "space-y-10 w-full">
                            <h3 className = "text-3xl">
                                Screenshots
                            </h3>
                            { projects[projectID].screenshots.map((val, i) => (
                                <Image 
                                    key = { i }
                                    src = { val.src }
                                    alt = { val.label }
                                    priority
                                    className = "w-full rounded-lg"
                                />
                            ))}
                            { projects[projectID].video && (
                                <video
                                    controls
                                    width = { 1280 }
                                    className = "h-auto"
                                >
                                    <source 
                                        src = { projects[projectID].video }
                                        type = "video/mp4"
                                    />
                                </video>
                            )}
                        </div>
                        <div className = "space-y-10">
                            <h3 className = "text-3xl">
                                Tools and Frameworks used
                            </h3>
                            <ul className = "px-5">
                                { projects[projectID].tools.map((val, i) =>(
                                    <li 
                                        key = { i }
                                        className = "w-full list-disc text-xl"
                                    >
                                        { val }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    </>
  )
};

export default ProjectModal;