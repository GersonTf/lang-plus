'use client';

import React, { ButtonHTMLAttributes, ReactNode, useState } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300";
  
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  };
  
  const variantClasses = {
    primary: `bg-[#2563eb] text-white hover:bg-[#1d4ed8] ${isHovered ? 'shadow-lg -translate-y-1' : 'shadow-md'}`,
    secondary: `bg-[#F4C635] text-gray-900 hover:bg-[#E2B52C] ${isHovered ? 'shadow-lg -translate-y-1' : 'shadow-md'}`,
    outline: `bg-transparent border-2 border-[#2563eb] text-[#2563eb] hover:border-[#1d4ed8] hover:text-[#1d4ed8] ${isHovered ? 'shadow-md -translate-y-1' : ''}`,
    text: `bg-transparent text-[#2563eb] hover:text-[#1d4ed8] underline-offset-2 ${isHovered ? 'underline' : ''}`,
  };
  
  const iconSpacing = icon ? (iconPosition === 'left' ? 'mr-1.5' : 'ml-1.5') : '';
  
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={iconSpacing}>{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && <span className={iconSpacing}>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button; 