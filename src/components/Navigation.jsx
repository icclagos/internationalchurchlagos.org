import React, { useState } from 'react';

const Navigation = ({ activeSection, onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'events', label: 'EVENTS' },
    { id: 'get-involved', label: 'GET INVOLVED' },
    { id: 'contact', label: 'CONTACT' }
  ];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav id="navigation" className="bg-blue-900 text-white sticky top-0 z-40 w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:block container mx-auto">
        <div className="flex justify-center">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavClick(item.id)}
                  className={`px-4 py-4 font-medium hover:bg-blue-800 transition-colors ${
                    activeSection === item.id ? 'border-b-4 border-blue-400' : ''
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <span className="font-medium">Menu</span>
          <button 
            onClick={toggleMobileMenu}
            className="focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="px-2 pt-2 pb-4 bg-blue-800">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavClick(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded ${
                      activeSection === item.id ? 'bg-blue-600' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;