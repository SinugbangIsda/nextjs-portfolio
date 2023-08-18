import React from 'react';
import { 
    AnimatePresence,
    motion
} from 'framer-motion';
import { services } from '@/constants';

const Services = () => {
  return (
    <div className = "space-y-10 w-full">
        <div className = "w-full">
            <h2 className = "text-3xl">
                What I can do
            </h2>
        </div>
        <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
                { services.map((val, i) => (
                    <motion.div 
                        key = { i }
                        className = "w-full border border-[#2C3031] rounded-xl p-10 flex flex-col items-center justify-center text-center gap-y-2"
                    >
                        <span>
                            { val.icon }
                        </span>
                        <span 
                            className = "text-lg"
                        >
                            { val.label }
                        </span>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Services;