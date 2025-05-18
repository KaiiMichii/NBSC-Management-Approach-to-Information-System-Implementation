import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { CheckSquare, Share2 } from 'lucide-react';

export function Conclusion() {
  return (
    <section className="mb-20">
      <SectionTitle 
        id="conclusion" 
        title="Conclusion" 
      />
      
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <p className="text-gray-700 mb-6">
          A project management-driven approach to IS implementation ensures Northern Bukidnon State College 
          can effectively modernize its processes, enhance service delivery, and support institutional growth. 
          This proposal lays out the structured roadmap for a successful IS project, reinforcing NBSC's 
          commitment to excellence and innovation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center mb-4">
              <CheckSquare className="w-5 h-5 text-blue-600 mr-2" />
              <h4 className="font-semibold text-gray-800">Key Benefits</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Streamlined administrative processes</li>
              <li>• Enhanced data accuracy and accessibility</li>
              <li>• Improved decision-making through better reporting</li>
              <li>• Increased efficiency in student and staff services</li>
            </ul>
          </div>
          
          <div className="p-4 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center mb-4">
              <Share2 className="w-5 h-5 text-blue-600 mr-2" />
              <h4 className="font-semibold text-gray-800">Next Steps</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Secure project approval from NBSC administration</li>
              <li>• Assemble the project team and assign roles</li>
              <li>• Conduct detailed requirements gathering</li>
              <li>• Initiate vendor selection process (if applicable)</li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 bg-blue-100 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Northern Bukidnon State College</h3>
          <p className="text-blue-600 font-medium">Transforming Education Through Technology</p>
        </div>
      </Card>
    </section>
  );
}