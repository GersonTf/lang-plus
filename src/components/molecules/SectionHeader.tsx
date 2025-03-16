'use client';

import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  decorative?: boolean;
  id?: string;
  className?: string;
}

/**
 * A consistent section header component with optional decorative elements
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = false,
  decorative = true,
  id,
  className = '',
}) => {
  return (
    <div className={`mb-6 sm:mb-8 md:mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      {/* Decorative elements */}
      {decorative && (
        <div className={`${centered ? 'flex justify-center' : 'flex'} mb-4`}>
          <div className="h-1 w-10 bg-primary rounded-full mr-4"></div>
          {centered && <div className="h-1 w-16 bg-secondary rounded-full"></div>}
          {centered && <div className="h-1 w-10 bg-primary rounded-full ml-4"></div>}
        </div>
      )}

      {/* Heading */}
      <h2
        id={id}
        className={`heading-primary text-2xl sm:text-3xl lg:text-4xl font-bold ${subtitle ? 'mb-3 sm:mb-4' : ''}`}
      >
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="text-primary text-lg leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
