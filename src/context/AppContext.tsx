import React, { createContext, useContext, useState, ReactNode } from 'react';

type Section = 
  | 'introduction' 
  | 'project-info' 
  | 'objectives-scope' 
  | 'stakeholders'
  | 'project-planning'
  | 'system-design'
  | 'implementation'
  | 'evaluation'
  | 'conclusion';

interface AppContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  scrollToSection: (section: Section) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>('introduction');

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContext.Provider value={{ activeSection, setActiveSection, scrollToSection }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}