"use client"

import React, { 
    ReactNode,
    useState
} from 'react';
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';

interface AccordionProps {
    heading: string;
    children: ReactNode;
    active: boolean
};

const Accordion = ({
    heading,
    children,
    active
}: AccordionProps ) => {
    const [ isActive, setIsActive ] = useState<boolean>(active);

  return (
    <>
        <div className = {`rounded-lg border hover:border-white duration-500 font-bold ${isActive ? "bg-white text-black border-white" : "border-[#2C3031]"}`}>
            <h2 className = "mb-0">
            <button
                className = "group relative flex w-full items-center px-5 py-4 text-left text-lg"
                type = "button"
                onClick = {() => setIsActive(!isActive!)}
            >
                { heading }
                <FaChevronDown className = {`-mr-1 ml-auto h-5 w-5 shrink-0 duration-200 ease-in-out ${isActive ? "rotate-180" : ""}`} /> 
            </button>
            </h2>   
        </div>
        <AnimatePresence>
            { isActive && 
                (
                    <motion.div 
                        initial = {{ height: 0 }}
                        animate = {{ height: "auto" }}
                        exit = {{ height: 0 }}
                        transition = {{ duration: 0.3 }}
                        className = "rounded-lg border border-[#2C3031] origin-top overflow-clip bg-[#212327]"
                    >
                        <div className = "px-5 py-4">
                            { children }
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    </>
  )
};

export default Accordion;