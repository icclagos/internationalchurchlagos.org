import React from 'react';

const GetInvolvedSection = () => {
  const ministries = [
    {
      id: 1,
      title: "Worship Team",
      description: "Join our worship team to lead the congregation in praise and worship through music and song.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Children's Ministry",
      description: "Help nurture the faith of our youngest members through engaging activities and Bible lessons.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Community Outreach",
      description: "Participate in outreach programs that serve our local community and spread God's love.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Prayer Team",
      description: "Join our prayer warriors in lifting up the needs of our church, community, and world.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get Involved</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              There are many ways to get involved and serve in our church community. 
              Discover your gifts and talents and find a place where you can grow while making a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ministries.map((ministry) => (
              <div key={ministry.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  {ministry.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{ministry.title}</h3>
                <p className="text-gray-700 mb-4">{ministry.description}</p>
                <a 
                  href="#" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  Join This Ministry
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          
          {/* Donation/Giving Section */}
          <div className="mt-16 bg-blue-900 text-white rounded-xl p-8 shadow-lg">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Support Our Ministry</h3>
                <p className="mb-4">
                  Your generous donations help us continue our mission and expand our outreach 
                  programs in the community. Every contribution makes a difference.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a 
                    href="#" 
                    className="bg-white text-blue-900 hover:bg-blue-100 py-2 px-6 rounded-full font-medium transition-colors"
                  >
                    Donate Now
                  </a>
                  <a 
                    href="#" 
                    className="bg-transparent hover:bg-blue-800 border-2 border-white py-2 px-6 rounded-full font-medium transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-blue-800 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-80">Your gifts are tax-deductible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;