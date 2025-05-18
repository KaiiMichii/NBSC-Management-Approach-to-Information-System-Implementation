import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { LayoutGrid, PenSquare, Table, Users2, BookOpen, Calendar, Building2 } from 'lucide-react';

export function SystemDesign() {
  const modules = [
    { 
      name: 'Student Records', 
      icon: <Users2 className="w-5 h-5" />,
      features: ['Enrollment management', 'Student profiles', 'Academic history']
    },
    { 
      name: 'Academic Management', 
      icon: <BookOpen className="w-5 h-5" />,
      features: ['Course catalog', 'Class scheduling', 'Grading system']
    },
    { 
      name: 'Administrative', 
      icon: <Building2 className="w-5 h-5" />,
      features: ['HR records', 'Staff management', 'Facility allocation']
    },
    { 
      name: 'Calendar & Events', 
      icon: <Calendar className="w-5 h-5" />,
      features: ['Academic calendar', 'Events management', 'Schedule tracking']
    }
  ];

  return (
    <section className="mb-16">
      <SectionTitle 
        id="system-design" 
        title="System Design Brief" 
      />
      
      <Card className="mb-8">
        <div className="flex items-center mb-6">
          <LayoutGrid className="w-6 h-6 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-800">System Overview</h3>
        </div>
        
        <p className="text-gray-700 mb-6">
          The system will include modules based on NBSC's needs (e.g., enrollment, grading, HR records). 
          Prototypes and wireframes will be created during the design phase and refined using stakeholder 
          feedback through iterative cycles.
        </p>
        
        <div className="p-6 bg-blue-50 rounded-lg border border-blue-100 mb-8">
          <div className="flex items-center mb-4">
            <PenSquare className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-gray-800">Design Approach</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• User-centered design with stakeholder input at every stage</li>
            <li>• Iterative prototyping to refine features based on feedback</li>
            <li>• Responsive interface accessible on multiple device types</li>
            <li>• Consistent design language across all modules</li>
          </ul>
        </div>
        
        <div>
          <div className="flex items-center mb-6">
            <Table className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-gray-800">System Modules</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((module, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                    {module.icon}
                  </div>
                  <h5 className="font-semibold text-gray-800">{module.name}</h5>
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {module.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-800 text-center mb-4">Design & Development Cycle</h4>
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          <div className="p-4 rounded-full bg-blue-100 text-blue-700 mb-4 md:mb-0">
            Requirements
          </div>
          <div className="hidden md:block text-gray-400">→</div>
          <div className="p-4 rounded-full bg-teal-100 text-teal-700 mb-4 md:mb-0">
            Prototype
          </div>
          <div className="hidden md:block text-gray-400">→</div>
          <div className="p-4 rounded-full bg-orange-100 text-orange-700 mb-4 md:mb-0">
            Feedback
          </div>
          <div className="hidden md:block text-gray-400">→</div>
          <div className="p-4 rounded-full bg-purple-100 text-purple-700 mb-4 md:mb-0">
            Refine
          </div>
          <div className="hidden md:block text-gray-400">→</div>
          <div className="p-4 rounded-full bg-green-100 text-green-700">
            Implement
          </div>
        </div>
      </div>
    </section>
  );
}