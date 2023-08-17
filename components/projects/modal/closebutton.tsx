import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

interface CloseButtonProps {
  onClose: () => void;
};

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <div className = "block xl:fixed w-full top-0 left-0 m-auto z-50 xl:px-6 xl:py-8">
      <div className = "flex justify-end items-center">
        <div className = "flex flex-row justify-center items-center gap-3">
          <div className = "py-0.5 px-2 border border-[#2B3036] text-[#8494A0] rounded-lg xl:block hidden">
            <span className = "text-xs">
              ESC
            </span>
          </div>
          <button
            onClick = { onClose }
            className = "aspect-square rounded-full p-2 text-[#8494A0] border border-[#4E5360] hover:text-black hover:bg-white hover:border-white text-xl duration-300" 
          >
            <IoCloseSharp />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CloseButton;