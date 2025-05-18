import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { StakeholderMap } from '../components/StakeholderMap';
import { Users } from 'lucide-react';

export function Stakeholders() {
  return (
    <section className="mb-16">
      <SectionTitle 
        id="stakeholders" 
        title="Stakeholder Identification" 
      />
      
      <Card className="mb-8">
        <div className="flex items-center mb-4">
          <Users className="w-6 h-6 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-800">Key Stakeholders</h3>
        </div>
        
        <p className="text-gray-700 mb-6">
          This interactive map visualizes the key stakeholders involved in the IS implementation project
          and their relationships with each other. Click on any stakeholder to see more details.
        </p>
        
        <StakeholderMap />
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-50 border border-blue-100">
          <h4 className="font-semibold text-blue-800 mb-2">Project Sponsor</h4>
          <p className="text-gray-700">NBSC Administration provides overall direction and funding for the project.</p>
        </Card>
        
        <Card className="bg-teal-50 border border-teal-100">
          <h4 className="font-semibold text-teal-800 mb-2">Project Manager</h4>
          <p className="text-gray-700">Appointed Project Leader (from MIS or appointed faculty) coordinates all project activities.</p>
        </Card>
        
        <Card className="bg-orange-50 border border-orange-100">
          <h4 className="font-semibold text-orange-800 mb-2">Development Team</h4>
          <p className="text-gray-700">Internal developers or external partners build and implement the system.</p>
        </Card>
      </div>
    </section>
  );
}