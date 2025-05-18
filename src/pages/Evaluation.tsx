import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { FileText, Lightbulb, Award } from 'lucide-react';

export function Evaluation() {
  return (
    <section className="mb-16">
      <SectionTitle 
        id="evaluation" 
        title="Final Reporting and Evaluation" 
      />
      
      <div className="space-y-8">
        <Card>
          <div className="flex items-center mb-6">
            <FileText className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Project Review</h3>
          </div>
          
          <p className="text-gray-700 mb-4">
            Documentation of project milestones, deviations, and achievements to provide a comprehensive 
            record of the implementation process.
          </p>
          
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Key Documentation</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded border border-blue-200">
                <h5 className="font-medium text-blue-800 mb-2">Implementation Report</h5>
                <p className="text-sm text-gray-600">Detailed summary of all implementation activities</p>
              </div>
              <div className="p-3 bg-white rounded border border-blue-200">
                <h5 className="font-medium text-blue-800 mb-2">Technical Documentation</h5>
                <p className="text-sm text-gray-600">System architecture, configurations, and customizations</p>
              </div>
              <div className="p-3 bg-white rounded border border-blue-200">
                <h5 className="font-medium text-blue-800 mb-2">User Adoption Report</h5>
                <p className="text-sm text-gray-600">Metrics on system usage and user engagement</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center mb-6">
            <Lightbulb className="w-6 h-6 text-teal-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Lessons Learned</h3>
          </div>
          
          <p className="text-gray-700 mb-4">
            Evaluation of effective strategies and areas for improvement to guide future IS implementation projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">What Worked Well</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Stakeholder engagement throughout all project phases</li>
                <li>• Iterative development approach with regular user feedback</li>
                <li>• Comprehensive training program with role-specific content</li>
                <li>• Strong executive sponsorship and resource allocation</li>
              </ul>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-3">Areas for Improvement</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• More detailed initial requirements gathering</li>
                <li>• Earlier engagement with end-users in design phase</li>
                <li>• More robust testing of integration with existing systems</li>
                <li>• Better estimation of training and support needs</li>
              </ul>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-orange-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Success Criteria</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Functional System</h4>
              <p className="text-gray-700">System functionality aligned with NBSC requirements and specifications</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Project Constraints</h4>
              <p className="text-gray-700">IS implementation delivered within the established schedule and budget</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">User Satisfaction</h4>
              <p className="text-gray-700">Positive feedback from end-users regarding system usability and features</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}