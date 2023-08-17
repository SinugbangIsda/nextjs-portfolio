"use client"

import React, {
    ReactNode, 
    useEffect,
    useState 
} from "react";
import NextTopLoader from "nextjs-toploader";
import { 
    Footer,
    Navbar
} from "@/components";
import {
    AnimatePresence,
    motion
} from "framer-motion";
import { DM_Sans } from 'next/font/google';
import { HashLoader } from "react-spinners";

const dmSans = DM_Sans({ subsets: ['latin'] })

interface Props {
    children: ReactNode
};

const RootLayout = ({ 
    children 
}: Props) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ count, setCount ] = useState<number>(0);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2500);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (count === 100) return;
            setCount((prev) => prev + 1);
        }, 5);
        return () => clearTimeout(timeout);
    }, [ count ]);

    return (
        <html lang = "en">
            <body className = {`${dmSans.className} bg-[#111213] select-none`}>
                <NextTopLoader 
                    color = "#7D8590"
                    initialPosition = { 0.08 }
                    crawlSpeed = { 200 }
                    height = { 3 }
                    crawl = { true }
                    showSpinner = { false }
                    easing = "ease"
                    speed = { 200 }
                    shadow = "0 0 10px #fff7ea,0 0 5px #fff7ea"
                />
                <AnimatePresence>
                    { isLoading ? (
                        <motion.div
                            key = { "splash" }
                            initial = {{ opacity: 0 }}
                            animate = {{ opacity: 1 }}
                            exit = {{ opacity: 0 }}
                            className = "w-full h-screen flex justify-center items-center"
                        >
                            <HashLoader color = "#36d7b7" size = { 55 } />
                        </motion.div>
                    ) : (
                        <>
                            <Navbar />
                            <main
                                id = "main"
                                className = "flex flex-col h-screen text-white m-auto"
                            >
                                <div className = "grow">
                                    <AnimatePresence mode = "wait">
                                        { children }
                                    </AnimatePresence>
                                </div>
                                <Footer />
                            </main>
                        </>
                    )}
                </AnimatePresence>
            </body>
        </html>
    )
};

export default RootLayout;