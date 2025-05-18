import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';

export function Introduction() {
  return (
    <section className="mb-16 animate-fade-in">
      <SectionTitle 
        id="introduction" 
        title="NBSC Management Approach to Information System Implementation" 
        subtitle="An Interactive Prototype" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h3>
          <p className="text-gray-700 mb-4">
            Information Systems (IS) play a vital role in enhancing academic and administrative 
            efficiency at Northern Bukidnon State College (NBSC). The successful implementation of 
            such systems requires a structured project management approach.
          </p>
          <p className="text-gray-700">
            This proposal outlines a framework designed to guide the implementation of an IS project at NBSC, 
            ensuring it aligns with institutional goals, is delivered on time, within budget, and addresses 
            stakeholder needs.
          </p>
        </Card>
        
        <div className="grid grid-cols-1 gap-4">
          <Card className="bg-blue-50 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                IS
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Information Systems</h3>
            </div>
            <p className="text-gray-700">
              Potential systems to implement include Student Information System (SIS), 
              Human Resource Management System (HRMS), or Academic Management System (AMS).
            </p>
          </Card>
          
          <Card className="bg-teal-50 border border-teal-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3">
                PM
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Project Management Approach</h3>
            </div>
            <p className="text-gray-700">
              Our methodology follows the five standard project management phases: Initiation, 
              Planning, Execution, Monitoring & Controlling, and Closing.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}