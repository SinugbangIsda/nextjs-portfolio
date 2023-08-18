import React from 'react';
import { 
    Accordion, 
    Pill 
} from '@/components';
import { experience } from '@/constants';

const WorkExperience = () => {
  return (
    <div className = "space-y-10">
        <h2 className = "text-3xl text-white">
            Work Experience
        </h2>
        <div className = "space-y-4">
            { experience.map((val, i) =>(
                <Accordion 
                    key = { i }
                    heading = { val.heading }
                    active = { i === 0 }
                >
                    <div className = "space-y-1.5 flex flex-col text-lg">
                        <span className = "font-bold">
                            { val.company }
                        </span>
                        <span className = "text-[#8494A0]">
                            { val.date }
                        </span>
                        <div className = "flex flex-row items-center gap-1.5">
                            { val.tools.map((val, j) => (
                                <Pill key = { j }>
                                    <span className = "flex justify-center items-center text-center">
                                        { val }
                                   </span>
                                </Pill>
                            ))}
                        </div>
                        <ul className = "list-disc p-5">
                            { val.responsibilities.map((val, k) => (
                                <li 
                                    key = { k }
                                    className = ""
                                >
                                    { val }
                                </li>
                            ))}
                        </ul>
                    </div>
                </Accordion>
            ))}
        </div>
    </div>
  )
}

export default WorkExperience;