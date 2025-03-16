'use client';

import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  hasDots?: boolean;
  hasGlow?: boolean;
  colorVariant?: 'primary' | 'secondary' | 'accent' | 'highlight';
}

/**
 * A consistent wrapper for sections to maintain design cohesion across the site
 */
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  hasDots = false,
  hasGlow = false,
  colorVariant = 'primary',
}) => {
  // Define color map
  const colorMap = {
    primary: 'bg-white',
    secondary: 'bg-section-secondary',
    accent: 'bg-section-accent',
    highlight: 'bg-section-highlight',
  };

  return (
    <section
      id={id}
      className={`relative rounded-xl overflow-hidden ${colorMap[colorVariant]} ${className}`}
      role="region"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {/* Background pattern if enabled */}
      {hasDots && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      )}

      {/* Glowing corner effects if enabled */}
      {hasGlow && (
        <>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent-blue opacity-10 transform translate-x-1/3 -translate-y-1/3 blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent-yellow opacity-10 transform -translate-x-1/4 translate-y-1/4 blur-sm"></div>
        </>
      )}

      {/* Content */}
      <div className="relative p-6 sm:p-8 md:p-10">{children}</div>
    </section>
  );
};

export default SectionWrapper;
