import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { FlaskConical, GraduationCap, Server, Hammer } from 'lucide-react';

export function Implementation() {
  return (
    <section className="mb-16">
      <SectionTitle 
        id="implementation" 
        title="Implementation Strategy" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="flex flex-col h-full">
          <div className="flex items-center mb-6">
            <FlaskConical className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Pilot Testing</h3>
          </div>
          
          <p className="text-gray-700 mb-4">
            Initial rollout in selected departments to test system functionality and gather user feedback.
          </p>
          
          <div className="mt-auto">
            <div className="p-4 bg-blue-50 rounded-lg mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Key Activities</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Select representative department(s) for initial testing</li>
                <li>• Set up test environment with actual data samples</li>
                <li>• Define success metrics and feedback collection methods</li>
                <li>• Document and address issues discovered during pilot</li>
              </ul>
            </div>
          </div>
        </Card>
        
        <Card className="flex flex-col h-full">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-teal-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Training</h3>
          </div>
          
          <p className="text-gray-700 mb-4">
            Comprehensive hands-on sessions for faculty, staff, and IT personnel to ensure system adoption.
          </p>
          
          <div className="mt-auto">
            <div className="p-4 bg-teal-50 rounded-lg mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Training Approach</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Role-based training modules tailored to user needs</li>
                <li>• Hands-on workshops with real-world scenarios</li>
                <li>• Comprehensive documentation and user guides</li>
                <li>• Designated "super users" to provide peer support</li>
              </ul>
            </div>
          </div>
        </Card>
        
        <Card className="flex flex-col h-full">
          <div className="flex items-center mb-6">
            <Server className="w-6 h-6 text-orange-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Deployment</h3>
          </div>
          
          <p className="text-gray-700 mb-4">
            Full implementation across the institution after successful pilot testing and user training.
          </p>
          
          <div className="mt-auto">
            <div className="p-4 bg-orange-50 rounded-lg mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Deployment Strategy</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Phased rollout by department or functional area</li>
                <li>• Data migration from existing systems with validation</li>
                <li>• Go-live support team available during transition</li>
                <li>• Parallel systems operation during critical periods</li>
              </ul>
            </div>
          </div>
        </Card>
        
        <Card className="flex flex-col h-full">
          <div className="flex items-center mb-6">
            <Hammer className="w-6 h-6 text-purple-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Maintenance</h3>
          </div>
          
          <p className="text-gray-700 mb-4">
            Ongoing support, bug fixing, and system updates to ensure continued system effectiveness.
          </p>
          
          <div className="mt-auto">
            <div className="p-4 bg-purple-50 rounded-lg mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Support Structure</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• IT help desk for user support and issue resolution</li>
                <li>• Regular system maintenance and security updates</li>
                <li>• Quarterly feature enhancements based on user feedback</li>
                <li>• User community forums for knowledge sharing</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}