import React, { ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
}

const Pill = ({ 
  children
}: PillProps) => {
  return (
    <div className = "bg-[#191A1D] rounded-full py-2 px-4 text-xs sm:text-sm font-bold border border-white flex justify-center items-center text-center">
      { children }
    </div>
  )
}

export default Pill;