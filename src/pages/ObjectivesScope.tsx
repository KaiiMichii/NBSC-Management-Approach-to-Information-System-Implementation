import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { Target, Bookmark, CheckCircle2 } from 'lucide-react';

export function ObjectivesScope() {
  const objectives = [
    'To apply a structured project management methodology to IS implementation at NBSC.',
    'To ensure the IS project is delivered within the planned timeline and budget.',
    'To align system functionalities with NBSC\'s academic and administrative goals.',
    'To proactively identify and manage project risks.'
  ];

  const scopeItems = [
    'Covers medium-scale IS deployment (e.g., SIS, HRMS, AMS).',
    'Encompasses all phases: feasibility, development, testing, deployment, and training.',
    'Involves stakeholders including administrators, faculty, IT staff, and students.'
  ];

  return (
    <section className="mb-16">
      <SectionTitle 
        id="objectives-scope" 
        title="Objectives and Scope" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-100">
          <div className="flex items-center mb-6">
            <Target className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Objectives</h3>
          </div>
          
          <ul className="space-y-4">
            {objectives.map((objective, index) => (
              <li key={index} className="flex">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{objective}</span>
              </li>
            ))}
          </ul>
        </Card>
        
        <Card className="bg-gradient-to-br from-teal-50 to-white border border-teal-100">
          <div className="flex items-center mb-6">
            <Bookmark className="w-6 h-6 text-teal-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Scope</h3>
          </div>
          
          <ul className="space-y-4">
            {scopeItems.map((item, index) => (
              <li key={index} className="flex">
                <CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}