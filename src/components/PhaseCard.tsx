import React from 'react';

interface PhaseCardProps {
  phase: string;
  color: string;
  description: string;
  icon: React.ReactNode;
}

export function PhaseCard({ phase, color, description, icon }: PhaseCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105`}>
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-full ${color.replace('bg-', 'bg-').replace('600', '100')} ${color.replace('bg-', 'text-')}`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold ml-3 text-gray-800">{phase}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}