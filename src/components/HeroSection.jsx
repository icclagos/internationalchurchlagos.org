import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-gray-700"
        style={{ 
          backgroundPosition: "center center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ICC Lagos</h1>
        <h2 className="text-xl md:text-3xl mb-8">International Christian Community</h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          A place of worship, fellowship, and spiritual growth where everyone is welcome.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a 
            href="#about" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            Learn More
          </a>
          <a 
            href="#events" 
            className="bg-transparent hover:bg-white hover:text-blue-900 text-white py-3 px-8 rounded-full text-lg border-2 border-white transition-all duration-300"
          >
            Upcoming Events
          </a>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <a href="#navigation" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;