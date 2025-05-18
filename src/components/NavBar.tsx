import React, { useState, useEffect } from 'react';
import { Menu, X, School } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function NavBar() {
  const { activeSection, scrollToSection } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'project-info', label: 'Project Info' },
    { id: 'objectives-scope', label: 'Objectives & Scope' },
    { id: 'stakeholders', label: 'Stakeholders' },
    { id: 'project-planning', label: 'Project Planning' },
    { id: 'system-design', label: 'System Design' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'evaluation', label: 'Evaluation' },
    { id: 'conclusion', label: 'Conclusion' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <School className="h-8 w-8 text-blue-600 mr-2" />
            <span className="font-bold text-lg text-gray-800">NBSC</span>
          </div>
          
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id as any)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id as any);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 text-base font-medium rounded-md w-full text-left ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}