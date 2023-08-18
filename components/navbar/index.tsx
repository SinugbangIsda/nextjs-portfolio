"use client";

import React, {  
    useState,
    useEffect,
    useCallback
} from "react";
import { navlinks } from "@/constants";
import { Container, Logo } from "..";
import MobileNav from "./mobilenav";

const Navbar = () => {
    const [ scrollY, setScrollY ] = useState<number>(0);
    const [ isDrawerOpen, setIsDrawerOpen ] = useState<boolean>(false);
    const handleScroll = useCallback(() => setScrollY(window.scrollY), []);
    const isScrollOffset = scrollY > 1;
    const [ activeSection, setActiveSection ] = useState<string | null>("/");
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [ handleScroll ]);

    useEffect(() => {
        const sectionElements = document.querySelectorAll('section');

        sectionElements.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                setActiveSection(section.getAttribute("id"));
            }
        });

    }, [ scrollY ]);

    return (
        <header>
            <nav className = {
                "block sm:fixed sm:left-0 sm:top-0 w-full ease-in duration-300 text-white z-40 bg-[#111213] " +
                ( isScrollOffset ? "shadow-md shadow-black" : "") 
            }>
                <Container>
                    <div className = "flex justify-between items-center">
                        <div className = "mr-2 z-50">
                            { isDrawerOpen ?
                                <Logo />
                            :
                                <a 
                                    href = { navlinks[0].path }
                                    onClick = {(e) => {
                                        e.preventDefault();
                                        document.getElementById(navlinks[0].id)?.scrollIntoView({ behavior: "smooth" });
                                        setActiveSection(navlinks[0].id);
                                    }}
                                    title = "scroll-to-top"
                                >
                                    <Logo />
                                </a>
                            }
                            
                        </div>
                        <ul className = "hidden sm:flex sm:flex-row sm:gap-16 justify-around">
                            { navlinks.map((val, i) => (
                                <li 
                                    key = { i }
                                    className = {`font-bold ${activeSection === val.id ? "text-[#36d7b7]" : "text-white"}`}
                                >
                                    <a 
                                        href = { val.path }
                                        onClick = {(e) => {
                                            e.preventDefault();
                                            document.getElementById(val.id)?.scrollIntoView({ behavior: "smooth" });
                                            setActiveSection(val.id);
                                        }}
                                    >
                                        { val.label }
                                    </a>
                                </li>
                            ))}
                        </ul> 
                        <MobileNav 
                            active = { activeSection } 
                            open = { isDrawerOpen }
                            onClose = {() => setIsDrawerOpen(!isDrawerOpen)}
                        />
                    </div>
                </Container>
            </nav>
        </header>
    )
};

export default Navbar;