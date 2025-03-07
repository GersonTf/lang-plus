'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Contact', href: 'mailto:andy@a-plus-languages.com' }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          {/* Logo and Brand - left side */}
          <div className={styles.logoContainer}>
            <Image
              src="/images/aplusenglishLogo.jpg"
              alt="Aplus Languages Logo"
              width={60}
              height={60}
              className={styles.logo}
              priority
            />
            <span className={styles.brand}>
              Aplus Languages
            </span>
          </div>

          {/* Navigation - right side */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  ${styles.navLink} 
                  ${hoveredItem === item.name ? styles.navLinkHovered : ''}
                  ${hoveredItem === item.name && item.name !== 'Contact' ? styles.navLinkUnderlined : ''}
                `}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 