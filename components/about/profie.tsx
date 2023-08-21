import { 
    socmedlinks,
    techstack
} from '@/constants';
import React from 'react';
import Image from 'next/image';
import { GraduationPhoto } from '@/public';

const AboutMe = () => {
    return (
        <div className = "space-y-10">
            <h2 className = "text-3xl">
                About Me
            </h2>
            <div className = "flex sm:flex-row flex-col item-center w-full gap-10">
                <Image 
                    src = { GraduationPhoto }
                    alt = "GraduationPhoto"
                    className = "sm:w-80 w-full rounded-lg"
                    priority
                />
                <div className = "w-full flex flex-col justify-between items-start space-y-4">
                    <p className = "text-xl text-justify">
                        My name is Marcu Pelayo L. Operario. I&apos;m an aspiring Software Engineer who is committed to expanding my expertise in software development concepts and methodologies. I recently graduated with a Bachelor&apos;s Degree in Computer Science from Mapúa Malayan Colleges Mindanao. I&apos;m excited to join a team and contribute to developing high-quality software solutions.
                    </p>
                    <p className = "text-xl">
                        Here are some technologies that I have used in various projects:
                    </p>
                    <ul className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                        { techstack.map((val, i) => (
                            <li 
                                key = { i }
                                className = "flex flex-row items-center gap-3"
                            >
                                <span className = "text-2xl">
                                    { val.icon }
                                </span>
                                <span className = "text-md">
                                    { val.label }
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className = "w-full flex items-center sm:flex-row flex-col gap-4">
                        <a
                            href = "/resume.pdf"
                            target = "_blank"
                            className = "w-full border border-[#2C3031] text-white rounded-lg hover:bg-white hover:text-black duration-300 p-4 font-bold flex justify-center items-center"
                        >
                            Resume
                        </a>
                        { socmedlinks.map((val, i) => (
                            <div 
                                key = { i }
                                className = "w-full lg:w-auto"
                            >
                                <a
                                    href = { val.path }
                                    target = "_blank"
                                    className = "w-full border border-[#2C3031] rounded-xl p-4 flex justify-center items-center space-x-2 hover:bg-white hover:text-black duration-300 text-xl cursor-pointer"
                                >
                                    { val.icon }
                                    <span className = "sm:hidden">
                                        { val.label }
                                    </span>
                                </a>
                            </div> 
                        ))}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default AboutMe;