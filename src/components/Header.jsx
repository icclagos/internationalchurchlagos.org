import React from 'react';

const Header = ({ isScrolled }) => {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <div className="mr-4">
            <div className="h-12 w-12 flex items-center justify-center bg-blue-700 rounded-full text-white font-bold text-xl">
              ICC
            </div>
          </div>
          <div className={`font-semibold text-lg transition-colors ${
            isScrolled ? 'text-blue-900' : 'text-white'
          }`}>
            <div className="text-xl md:text-2xl font-bold">ICC LAGOS</div>
            <div className="text-sm md:text-base">International Christian Community</div>
          </div>
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button - implemented in Navigation.jsx */}
          <button className={`p-2 rounded-md ${
            isScrolled ? 'text-blue-900' : 'text-white'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;