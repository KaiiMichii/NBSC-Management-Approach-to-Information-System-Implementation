import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg ${className}`}>
      {title && <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>}
      {children}
    </div>
  );
}