import React from 'react';

interface Task {
  id: number;
  name: string;
  start: number;
  duration: number;
  phase: string;
  color: string;
}

export function GanttChart() {
  const phases = [
    { name: 'Initiation', color: 'bg-blue-500' },
    { name: 'Planning', color: 'bg-teal-500' },
    { name: 'Execution', color: 'bg-orange-500' },
    { name: 'Monitoring', color: 'bg-purple-500' },
    { name: 'Closing', color: 'bg-green-500' }
  ];
  
  const tasks: Task[] = [
    { id: 1, name: 'Project Definition', start: 0, duration: 2, phase: 'Initiation', color: 'bg-blue-500' },
    { id: 2, name: 'Requirements Gathering', start: 1, duration: 3, phase: 'Initiation', color: 'bg-blue-500' },
    { id: 3, name: 'System Design', start: 3, duration: 4, phase: 'Planning', color: 'bg-teal-500' },
    { id: 4, name: 'Development', start: 6, duration: 8, phase: 'Execution', color: 'bg-orange-500' },
    { id: 5, name: 'Testing', start: 12, duration: 4, phase: 'Monitoring', color: 'bg-purple-500' },
    { id: 6, name: 'Training', start: 14, duration: 3, phase: 'Execution', color: 'bg-orange-500' },
    { id: 7, name: 'Deployment', start: 16, duration: 2, phase: 'Execution', color: 'bg-orange-500' },
    { id: 8, name: 'Project Handover', start: 18, duration: 2, phase: 'Closing', color: 'bg-green-500' }
  ];

  const totalDuration = 20; // Total weeks for the project
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[768px]">
        <div className="flex mb-2">
          <div className="w-1/4 pr-4">
            <h3 className="font-semibold text-gray-700">Task</h3>
          </div>
          <div className="w-3/4 flex">
            {months.map((month, index) => (
              <div 
                key={month} 
                className="flex-1 text-center text-sm font-medium text-gray-600 border-r border-gray-200 last:border-r-0"
              >
                {month}
              </div>
            ))}
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/4"></div>
          <div className="w-3/4 flex">
            {[...Array(totalDuration)].map((_, i) => (
              <div 
                key={i} 
                className="flex-1 text-center text-xs text-gray-500"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {tasks.map((task) => (
          <div key={task.id} className="flex mb-3 items-center">
            <div className="w-1/4 pr-4">
              <div className="text-sm font-medium text-gray-700">{task.name}</div>
            </div>
            <div className="w-3/4 flex h-8 relative">
              {[...Array(totalDuration)].map((_, i) => (
                <div key={i} className="flex-1 border-r border-gray-100 last:border-r-0"></div>
              ))}
              <div 
                className={`absolute top-1 h-6 rounded-md ${task.color} transition-all duration-300 hover:opacity-80`}
                style={{ 
                  left: `${(task.start / totalDuration) * 100}%`, 
                  width: `${(task.duration / totalDuration) * 100}%` 
                }}
                title={`${task.name} (${task.duration} weeks)`}
              ></div>
            </div>
          </div>
        ))}

        <div className="mt-8 flex justify-center space-x-4">
          {phases.map((phase) => (
            <div key={phase.name} className="flex items-center">
              <div className={`w-4 h-4 rounded-full ${phase.color} mr-2`}></div>
              <span className="text-sm text-gray-700">{phase.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}