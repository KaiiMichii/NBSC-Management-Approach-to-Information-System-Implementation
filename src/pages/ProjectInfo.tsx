import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { PhaseCard } from '../components/PhaseCard';
import { Lightbulb, ClipboardList, Play, BarChart, CheckCircle } from 'lucide-react';

export function ProjectInfo() {
  const phases = [
    {
      name: 'Initiation',
      color: 'bg-blue-600',
      description: 'Define project scope, objectives, and feasibility. Identify stakeholders and project sponsor.',
      icon: <Lightbulb size={20} />
    },
    {
      name: 'Planning',
      color: 'bg-teal-600',
      description: 'Create detailed project plan, timeline, budget, and risk assessment strategies.',
      icon: <ClipboardList size={20} />
    },
    {
      name: 'Execution',
      color: 'bg-orange-600',
      description: 'Develop the information system according to requirements and design specifications.',
      icon: <Play size={20} />
    },
    {
      name: 'Monitoring & Controlling',
      color: 'bg-purple-600',
      description: 'Track progress, manage changes, and ensure quality standards are maintained.',
      icon: <BarChart size={20} />
    },
    {
      name: 'Closing',
      color: 'bg-green-600',
      description: 'Finalize all activities, conduct system handover, and document lessons learned.',
      icon: <CheckCircle size={20} />
    }
  ];

  return (
    <section className="mb-16">
      <SectionTitle 
        id="project-info" 
        title="Project Title and Description" 
      />
      
      <Card className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">NBSC Project Management Approach to IS Implementation</h3>
        <p className="text-gray-700 mb-4">
          This initiative focuses on applying a structured project management methodology to implement 
          an Information System tailored to NBSC's operational needs—such as a Student Information System (SIS), 
          Human Resource Management System (HRMS), or Academic Management System (AMS).
        </p>
        <p className="text-gray-700">
          The implementation will follow the five standard project management phases. The methodology emphasizes 
          stakeholder participation, risk mitigation, and optimal resource use.
        </p>
      </Card>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Project Management Phases</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {phases.map((phase) => (
          <PhaseCard
            key={phase.name}
            phase={phase.name}
            color={phase.color}
            description={phase.description}
            icon={phase.icon}
          />
        ))}
      </div>
    </section>
  );
}