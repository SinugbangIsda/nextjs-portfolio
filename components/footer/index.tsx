"use client"

import { socmedlinks } from "@/constants";
import { Container } from "@/components";
import React from "react";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className = "border-t border-[#2C3031] mt-14">
            <Container>
                <div className = "flex items-center justify-between">
                    <span>
                        © { currentYear } by Marcu Operario.
                    </span>
                    <div className = "flex items-center gap-4">
                        { socmedlinks.map((val, i) => (
                            <a 
                                key = { i }
                                href = { val.path }
                                target = "_blank"
                                className = "rounded-full aspect-square border border-[#2C3031] p-2 hover:bg-white hover:text-black duration-300 cursor-pointer"
                            >
                                { val.icon }
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
};

export default Footer;