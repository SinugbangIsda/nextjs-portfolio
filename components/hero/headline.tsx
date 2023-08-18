import React from 'react';
import Image from 'next/image';
import { HeroIllustration } from '@/public';
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Headline = () => {
  return (
    <div className = "flex flex-col sm:flex-row sm:items-center w-full ease-in-out duration-500 sm:mt-20">
        <div className = "space-y-4 w-full">
            <h1 className = "font-bold text-5xl lg:text-7xl">Hi, I'm Marcu</h1>
            <p className = "text-[#7D8590] text-2xl md:text-3xl lg:text-4xl">
                Aspiring Software Engineer from Davao City.
            </p>
            <div className = "flex flex-col sm:flex-row w-full gap-4">
                <a 
                    href = { navlinks[3].path }
                    onClick = {(e) => {
                        e.preventDefault();
                        document.getElementById(navlinks[3].id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    title = "scroll-to-contact"
                >
                    <button className = "px-6 py-4 border border-[#2C3031] text-white rounded-lg font-bold w-full sm:w-auto hover:bg-white hover:text-black duration-300">
                        <span>
                            Contact Me
                        </span>
                    </button>
                </a>
                <a 
                    href = { navlinks[1].path } 
                    onClick = {(e) => {
                        e.preventDefault();
                        document.getElementById(navlinks[1].id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className = " text-white rounded-lg hover:border-white font-bold flex flex-row gap-4 items-center justify-center"
                    
                >
                    <span>
                        Learn More
                    </span>
                    <span>
                        <HiOutlineArrowLongRight />
                    </span>
                </a>
            </div>
        </div>
        <div className = "flex flex-col items-center justify-center w-full">
            <Image 
                src = { HeroIllustration }
                alt = "HeroIllustration"
                className = "w-96"
                priority
            />
        </div>
    </div>
  )
};

export default Headline;