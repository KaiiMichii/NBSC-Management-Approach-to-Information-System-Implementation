import React from 'react';

interface BudgetItem {
  id: number;
  name: string;
  amount: number;
  color: string;
}

export function BudgetChart() {
  const budgetItems: BudgetItem[] = [
    { id: 1, name: 'Software Licenses', amount: 40000, color: 'bg-blue-500' },
    { id: 2, name: 'Server Infrastructure', amount: 25000, color: 'bg-teal-500' },
    { id: 3, name: 'Equipment', amount: 20000, color: 'bg-orange-500' },
    { id: 4, name: 'Training Materials', amount: 15000, color: 'bg-purple-500' }
  ];

  const total = budgetItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="space-y-8">
      <div className="relative pt-1">
        <div className="flex h-8 overflow-hidden rounded-lg bg-gray-200">
          {budgetItems.map((item, index) => (
            <div 
              key={item.id}
              className={`${item.color} h-full`}
              style={{ width: `${(item.amount / total) * 100}%` }}
              title={`${item.name}: ₱${item.amount.toLocaleString()}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {budgetItems.map((item) => (
          <div 
            key={item.id}
            className="flex items-center p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-4 h-4 rounded-full ${item.color} mr-3 flex-shrink-0`}></div>
            <div className="flex-grow">
              <h4 className="font-medium text-gray-800">{item.name}</h4>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">{((item.amount / total) * 100).toFixed(1)}%</span>
                <span className="font-semibold">₱{item.amount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">Total Budget:</span>
          <span className="text-xl font-bold text-blue-600">₱{total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}