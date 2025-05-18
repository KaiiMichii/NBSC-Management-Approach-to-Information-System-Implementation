import React from 'react';

interface Stakeholder {
  id: string;
  name: string;
  role: string;
  description: string;
  position: {
    x: number;
    y: number;
  };
  color: string;
}

export function StakeholderMap() {
  const stakeholders: Stakeholder[] = [
    {
      id: 'admin',
      name: 'NBSC Administration',
      role: 'Project Sponsor',
      description: 'Provides overall direction and funding for the project',
      position: { x: 50, y: 20 },
      color: 'bg-blue-500'
    },
    {
      id: 'manager',
      name: 'Project Leader',
      role: 'Project Manager',
      description: 'Manages day-to-day project activities and coordination',
      position: { x: 50, y: 50 },
      color: 'bg-teal-500'
    },
    {
      id: 'dev-team',
      name: 'Development Team',
      role: 'Technical Implementation',
      description: 'Designs and builds the information system',
      position: { x: 25, y: 70 },
      color: 'bg-orange-500'
    },
    {
      id: 'end-users',
      name: 'Faculty, Staff, Students',
      role: 'End Users',
      description: 'Primary users of the information system',
      position: { x: 75, y: 70 },
      color: 'bg-purple-500'
    },
    {
      id: 'it-dept',
      name: 'IT Department',
      role: 'Technical Support',
      description: 'Provides technical infrastructure and ongoing support',
      position: { x: 15, y: 40 },
      color: 'bg-green-500'
    },
    {
      id: 'trainers',
      name: 'Training Team',
      role: 'User Training',
      description: 'Conducts onboarding sessions for all users',
      position: { x: 85, y: 40 },
      color: 'bg-yellow-500'
    }
  ];

  // Draw lines between stakeholders
  const connections = [
    { from: 'admin', to: 'manager' },
    { from: 'manager', to: 'dev-team' },
    { from: 'manager', to: 'end-users' },
    { from: 'manager', to: 'it-dept' },
    { from: 'manager', to: 'trainers' },
    { from: 'dev-team', to: 'it-dept' },
    { from: 'trainers', to: 'end-users' }
  ];

  return (
    <div className="relative h-[500px] w-full border border-gray-200 rounded-lg bg-gray-50">
      {stakeholders.map((stakeholder) => (
        <div
          key={stakeholder.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 w-36 transition-transform duration-300 hover:scale-110 cursor-pointer"
          style={{
            left: `${stakeholder.position.x}%`,
            top: `${stakeholder.position.y}%`
          }}
        >
          <div className={`p-3 rounded-lg shadow-md ${stakeholder.color.replace('bg-', 'bg-').replace('500', '100')} border ${stakeholder.color.replace('bg-', 'border-').replace('500', '300')}`}>
            <div className="text-center">
              <div className={`mx-auto w-3 h-3 rounded-full ${stakeholder.color} mb-2`}></div>
              <h4 className="font-semibold text-sm text-gray-800">{stakeholder.name}</h4>
              <p className="text-xs text-gray-600">{stakeholder.role}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          {connections.map((connection, index) => {
            const fromStakeholder = stakeholders.find(s => s.id === connection.from);
            const toStakeholder = stakeholders.find(s => s.id === connection.to);
            
            if (!fromStakeholder || !toStakeholder) return null;
            
            return (
              <line
                key={index}
                x1={`${fromStakeholder.position.x}%`}
                y1={`${fromStakeholder.position.y}%`}
                x2={`${toStakeholder.position.x}%`}
                y2={`${toStakeholder.position.y}%`}
                stroke="#CBD5E1"
                strokeWidth="1"
                strokeDasharray="4 2"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}