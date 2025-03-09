'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LanguageFlagProps {
  position: 'top-left' | 'bottom-right';
  language: 'spanish' | 'uk';
}

const LanguageFlag: React.FC<LanguageFlagProps> = ({ position, language }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get the correct flag path based on language
  const flagSrc =
    language === 'spanish' ? '/images/Flag_of_Spain.svg' : '/images/Flag_of_the_United_Kingdom.svg';

  const alt = language === 'spanish' ? 'Spanish Flag' : 'UK Flag';

  const positionClasses = {
    'top-left': 'top-1/4 -left-4',
    'bottom-right': 'bottom-1/4 -right-4',
  };

  const bgClasses = {
    'top-left': 'bg-yellow-400/20 animate-float-slow',
    'bottom-right': 'bg-blue-500/30 animate-float-slow-reverse',
  };

  const ringClasses = {
    'top-left': 'ring-2 ring-yellow-300/30',
    'bottom-right': 'ring-2 ring-blue-400/30',
  };

  const className = [
    'absolute',
    positionClasses[position],
    'w-16 h-16',
    bgClasses[position],
    'rounded-full backdrop-blur-sm',
    ringClasses[position],
    'hidden md:block overflow-hidden',
    'transition-all duration-300',
    isHovered ? 'scale-110 -translate-y-1' : '',
  ]
    .join(' ')
    .trim();

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ aspectRatio: '1/1' }}
    >
      <Image src={flagSrc} alt={alt} fill className="object-cover" sizes="64px" />
    </div>
  );
};

export default LanguageFlag;
