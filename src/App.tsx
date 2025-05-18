import React from 'react';
import { NavBar } from './components/NavBar';
import { Introduction } from './pages/Introduction';
import { ProjectInfo } from './pages/ProjectInfo';
import { ObjectivesScope } from './pages/ObjectivesScope';
import { Stakeholders } from './pages/Stakeholders';
import { ProjectPlanning } from './pages/ProjectPlanning';
import { SystemDesign } from './pages/SystemDesign';
import { Implementation } from './pages/Implementation';
import { Evaluation } from './pages/Evaluation';
import { Conclusion } from './pages/Conclusion';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="container mx-auto pt-16 pb-20 px-4 md:px-6">
          <Introduction />
          <ProjectInfo />
          <ObjectivesScope />
          <Stakeholders />
          <ProjectPlanning />
          <SystemDesign />
          <Implementation />
          <Evaluation />
          <Conclusion />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;