import React from 'react';

interface Risk {
  id: number;
  name: string;
  impact: 'Low' | 'Medium' | 'High';
  probability: 'Low' | 'Medium' | 'High';
  mitigation: string;
}

export function RiskMatrix() {
  const risks: Risk[] = [
    {
      id: 1,
      name: 'Development Delays',
      impact: 'High',
      probability: 'Medium',
      mitigation: 'Build buffer time into schedule'
    },
    {
      id: 2,
      name: 'Scope Creep',
      impact: 'High',
      probability: 'High',
      mitigation: 'Enforce strict change control processes'
    },
    {
      id: 3,
      name: 'Technical Failures',
      impact: 'Medium',
      probability: 'Low',
      mitigation: 'Regular testing and backup protocols'
    },
    {
      id: 4,
      name: 'User Resistance',
      impact: 'Medium',
      probability: 'Medium',
      mitigation: 'Engage users early and provide ample training'
    }
  ];

  const getColor = (impact: string, probability: string) => {
    if (impact === 'High' && probability === 'High') return 'bg-red-100 border-red-300 text-red-700';
    if (impact === 'High' && probability === 'Medium') return 'bg-orange-100 border-orange-300 text-orange-700';
    if (impact === 'Medium' && probability === 'High') return 'bg-orange-100 border-orange-300 text-orange-700';
    if (impact === 'High' && probability === 'Low') return 'bg-yellow-100 border-yellow-300 text-yellow-700';
    if (impact === 'Medium' && probability === 'Medium') return 'bg-yellow-100 border-yellow-300 text-yellow-700';
    if (impact === 'Low' && probability === 'High') return 'bg-yellow-100 border-yellow-300 text-yellow-700';
    return 'bg-green-100 border-green-300 text-green-700';
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1"></div>
        <div className="col-span-3 grid grid-cols-3 gap-2">
          <div className="text-center font-semibold text-sm text-gray-700 p-2">Low Probability</div>
          <div className="text-center font-semibold text-sm text-gray-700 p-2">Medium Probability</div>
          <div className="text-center font-semibold text-sm text-gray-700 p-2">High Probability</div>
        </div>

        <div className="font-semibold text-sm text-gray-700 p-2 flex items-center justify-center">
          <div className="transform -rotate-90">High Impact</div>
        </div>
        <div className="bg-yellow-100 border border-yellow-300 rounded p-2 text-center text-xs transition-all hover:shadow-md">
          Medium Risk
        </div>
        <div className="bg-orange-100 border border-orange-300 rounded p-2 text-center text-xs transition-all hover:shadow-md">
          High Risk
        </div>
        <div className="bg-red-100 border border-red-300 rounded p-2 text-center text-xs transition-all hover:shadow-md">
          Critical Risk
        </div>

        <div className="font-semibold text-sm text-gray-700 p-2 flex items-center justify-center">
          <div className="transform -rotate-90">Medium Impact</div>
        </div>
        <div className="bg-green-100 border border-green-300 rounded p-2 text-center text-xs transition-all hover:shadow-md">
          Low Risk
        </div>
        <div className="bg-yellow-100 border border-yellow-300 rounded p-2 text-center text-xs transition-all hover:shadow-md">
          Medium Risk
        </div>
        <div className="bg-orange-100 border border-orange-300 rounded p-2 text-center text-xs transition-all hover:shadow-md">
          High Risk
        </div>

        <div className="font-semibold text-sm text-gray-700 p-2 flex items-center justify-center">
          <div className="transform -rotate-90">Low Impact</div>
        </div>
        <div className="bg-green-100 border border-green-300 rounded p-2 text-center text-xs transition-all hover:shadow-md">
          Minimal Risk
        </div>
        <div className="bg-green-100 border border-green-300 rounded p-2 text-center text-xs transition-all hover:shadow-md">
          Low Risk
        </div>
        <div className="bg-yellow-100 border border-yellow-300 rounded p-2 text-center text-xs transition-all hover:shadow-md">
          Medium Risk
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Identified Project Risks</h3>
        <div className="space-y-3">
          {risks.map((risk) => (
            <div 
              key={risk.id}
              className={`p-4 rounded-lg border shadow-sm ${getColor(risk.impact, risk.probability)}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{risk.name}</h4>
                  <p className="text-sm mt-1">Mitigation: {risk.mitigation}</p>
                </div>
                <div className="flex space-x-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-50">
                    Impact: {risk.impact}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-50">
                    Probability: {risk.probability}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}