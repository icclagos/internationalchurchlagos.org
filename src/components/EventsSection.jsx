import React from 'react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Sunday Service",
      date: "Every Sunday",
      time: "10:00 AM",
      description: "Weekly worship service with praise, prayer, and powerful teaching.",
      image: "/public/assets/images/sunday-service.jpg"
    },
    {
      id: 2,
      title: "Bible Study",
      date: "Every Wednesday",
      time: "6:30 PM",
      description: "In-depth study of scripture and discussion in small groups.",
      image: "/public/assets/images/bible-study.jpg"
    },
    {
      id: 3,
      title: "Youth Fellowship",
      date: "Every Friday",
      time: "5:00 PM",
      description: "Activities, games, and spiritual growth for teens and young adults.",
      image: "/public/assets/images/youth-fellowship.jpg"
    },
    {
      id: 4,
      title: "Annual Retreat",
      date: "December 10-12",
      time: "All Day",
      description: "Three-day spiritual retreat for renewal and fellowship.",
      image: "/public/assets/images/church-retreat.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-700">Join us for worship, fellowship, and community service</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>{event.title} Event</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <p className="text-gray-700 mb-6 flex-1">{event.description}</p>
                  <a 
                    href="#" 
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="#" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
              View All Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;