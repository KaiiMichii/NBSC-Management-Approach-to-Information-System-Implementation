import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { GanttChart } from '../components/GanttChart';
import { RiskMatrix } from '../components/RiskMatrix';
import { BudgetChart } from '../components/BudgetChart';
import { CalendarClock, AlertTriangle, PiggyBank, Mail } from 'lucide-react';

export function ProjectPlanning() {
  return (
    <section className="mb-16">
      <SectionTitle 
        id="project-planning" 
        title="Project Planning Documents" 
      />
      
      <div className="space-y-12">
        <div>
          <Card className="mb-4">
            <div className="flex items-center mb-4">
              <CalendarClock className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Timeline (Gantt Chart)</h3>
            </div>
            <p className="text-gray-700 mb-6">
              The project timeline visualizes key milestones across the five project phases, spanning approximately 5 months.
            </p>
            <GanttChart />
          </Card>
        </div>
        
        <div>
          <Card className="mb-4">
            <div className="flex items-center mb-4">
              <PiggyBank className="w-6 h-6 text-teal-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Budget and Resource Allocation</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Estimated Budget: PHP 100,000 - Covering software licenses, server infrastructure, equipment, and training materials.
            </p>
            <BudgetChart />
          </Card>
        </div>
        
        <div>
          <Card className="mb-4">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Risk Management Plan</h3>
            </div>
            <p className="text-gray-700 mb-6">
              The risk matrix below illustrates potential project risks, their impact and probability, and mitigation strategies.
            </p>
            <RiskMatrix />
          </Card>
        </div>
        
        <div>
          <Card>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Communication Plan</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Weekly Team Meetings</h4>
                <p className="text-gray-700">Progress updates and task alignment</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Monthly Stakeholder Reports</h4>
                <p className="text-gray-700">Project updates to NBSC leadership</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Communication Tools</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Email</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Trello</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Google Workspace</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Slack</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Documentation</h4>
                <p className="text-gray-700">Shared cloud drive accessible by all team members</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}