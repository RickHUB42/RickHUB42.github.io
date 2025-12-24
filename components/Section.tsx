import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`w-full max-w-4xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-12 ${className}`}>
      {children}
    </section>
  );
};