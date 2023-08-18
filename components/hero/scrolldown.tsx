import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import { navlinks } from '@/constants';
import { LuMouse } from "react-icons/lu";

const Scrolldown = () => {
  return (
    <div className = "flex flex-col items-center justify-center w-full gap-y-6 animate-pulse duration-500">
      <div className = "flex flex-row items-center gap-2 text-xl text-white" >
        <LuMouse />
        <span>
          Scroll down
        </span>
      </div>
      <a 
        href = { navlinks[1].path }
        aria-label = { "scroll-to-" + navlinks[1].path }
      >
        <FaAngleDoubleDown className = "text-3xl animate-bounce duration-1000"/>
      </a>
    </div>
  )
};

export default Scrolldown;