import React from "react";

export const CurvedDivider = () => {
  return (
    <div className="relative w-full bg-[#F8EBD9] leading-none z-20 pointer-events-none">
      <svg
        className="relative block w-full h-12 sm:h-16 md:h-24 lg:h-28 text-white"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C360,110 1080,-20 1440,64 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
