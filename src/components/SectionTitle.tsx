import React from 'react';

interface SectionTitleProps {
  id: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ id, title, subtitle }: SectionTitleProps) {
  return (
    <div id={id} className="pt-16 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      <div className="h-1 w-20 bg-blue-600 mt-4"></div>
    </div>
  );
}