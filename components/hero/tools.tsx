import {
    FramerMotionLogo,
    NextLogo, 
    TailwindCSSLogo, 
    VercelLogo 
} from '@/public';
import Image from 'next/image';
import React from 'react';

const stack = [
    {
        alt: "vercel",
        image: VercelLogo,
        className: "sm:h-40 sm:w-40 h-20 w-20"
    },
    {
        alt: "nextjs",
        image: NextLogo,
        className: "sm:h-40 sm:w-40 h-20 w-20"
    },
    {
        alt: "tailwindcss",
        image: TailwindCSSLogo,
        className: "sm:h-44 sm:w-44 h-28 w-28"
    },
    {
        alt: "framer",
        image: FramerMotionLogo,
        className: "sm:h-12 sm:w-12 h-4 w-4"
    },
]

const PoweredBy = () => {
  return (
    <div className = "my-4">
        <div>
            <p className = "text-[#6E7681] text-lg">
                Web portfolio powered by
            </p>
        </div>
        <div className = "flex flex-row justify-around items-center w-full">
            { stack.map((val, i) => (
                <Image 
                    src = { val.image }
                    alt = { val.alt }
                    className = { val.className }
                    key = { i }
                    priority
                />
            ))}
        </div>
    </div>
  )
}

export default PoweredBy;