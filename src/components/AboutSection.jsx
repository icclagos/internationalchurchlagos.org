import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Our Church</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div 
                className="rounded-lg shadow-lg w-full h-80 bg-gray-300 flex items-center justify-center"
              >
                <div className="text-gray-600 font-medium text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                  </svg>
                  <p>Church Interior</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Vision & Mission</h3>
              <p className="mb-4 text-gray-700">
                International Christian Community (ICC) Lagos was established to provide a spiritual home for Christians from all nations and backgrounds. Our mission is to share the love of Christ and build a community united in faith.
              </p>
              <p className="mb-6 text-gray-700">
                We strive to create an inclusive environment where everyone can worship, grow spiritually, and build meaningful relationships while serving God and our community.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-blue-500 text-xl mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Our Values</h4>
                  <p className="text-sm text-gray-600">Faith, Community, Service, Compassion</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-blue-500 text-xl mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Worship Times</h4>
                  <p className="text-sm text-gray-600">Sundays: 10:00 AM & 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Leadership Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Our Leadership</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(index => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 bg-gray-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">Pastor Name {index}</h4>
                  <p className="text-sm text-gray-600">Church {index === 1 ? 'Lead Pastor' : index === 2 ? 'Associate Pastor' : index === 3 ? 'Youth Pastor' : 'Worship Pastor'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;