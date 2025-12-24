import React, { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

// Main Title (Largest, Bold, Centered)
export const MainTitle: React.FC<TextProps> = ({ children, className = '' }) => (
  <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6 ${className}`}>
    {children}
  </h1>
);

// Brief/Section Introduction (Small, light gray)
export const SectionIntro: React.FC<TextProps> = ({ children, className = '' }) => (
  <p className={`text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed ${className}`}>
    {children}
  </p>
);

// Subtitle (Second largest, Centered)
export const Subtitle: React.FC<TextProps> = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl font-semibold text-gray-900 mt-16 mb-8 tracking-wide ${className}`}>
    {children}
  </h2>
);

// Sub-subtitle (Third largest)
export const SubSubtitle: React.FC<TextProps> = ({ children, className = '' }) => (
  <h3 className={`text-xl md:text-2xl font-medium text-gray-800 mt-10 mb-4 ${className}`}>
    {children}
  </h3>
);

// Body Text (Normal size, thin/light, centered)
export const BodyText: React.FC<TextProps> = ({ children, className = '' }) => (
  <p className={`text-base md:text-lg text-gray-600 font-light leading-8 max-w-prose mx-auto ${className}`}>
    {children}
  </p>
);