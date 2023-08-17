"use client"

import React, { useEffect } from "react";
import {
    AiOutlineMenu,
    AiOutlineClose
} from "react-icons/ai";
import { navlinks } from "@/constants";

interface HomeMobileNavProps {
    active: string | null;
    open: boolean;
    onClose: () => void;
}

const MobileNav = ({
    active,
    open,
    onClose
 }: HomeMobileNavProps) => {

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [ open ]);

    return (
        <>
            <div 
                className = "block sm:hidden cursor-pointer z-40"
                onClick = {() => onClose()}
            >
                { open ? 
                   <AiOutlineClose />
                :
                    <AiOutlineMenu />
                }
            </div>
            { open && (
                <div className = "block fixed sm:hidden left-0 top-0 w-full h-screen bg-black text-white z-30">
                    <ul className = "flex flex-col h-full justify-center items-center gap-10">
                        { navlinks.map((val, i) => (
                            <li
                                key = { i }
                                onClick = { onClose }
                                className = {`list-none text-4xl font-bold ${active === val.id ? "text-[#36d7b7]" : "text-white"}`}
                            >
                                <a 
                                    href = { val.path }
                                    onClick = {(e) => {
                                        e.preventDefault();
                                        document.getElementById(val.id)?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    { val.label }
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
};

export default MobileNav;