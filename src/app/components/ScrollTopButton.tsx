'use client';

import React, { useState } from 'react';

interface ScrollTopButtonProps {
  onClick: () => void;
}

const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      className={`
        fixed
        bottom-6 sm:bottom-8 md:bottom-10
        right-6 sm:right-8 md:right-10
        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
        flex
        items-center
        justify-center
        rounded-full
        text-xl sm:text-2xl
        z-50
        transition-all
        duration-300
        text-white
        ${isHovered 
          ? 'bg-blue-600 shadow-lg -translate-y-1' 
          : 'bg-blue-500 shadow-md opacity-90 translate-y-0'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Scroll to top of page"
    >
      <span className="relative -mt-0.5">↑</span>
    </button>
  );
};

export default ScrollTopButton; 