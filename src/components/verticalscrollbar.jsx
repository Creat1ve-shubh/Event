import React, { useEffect, useRef, useState } from 'react';
import { Events } from '../assets/images';
const events = [
  {
    id: 1,
    date: '2023-01-15',
    title: 'Title',
    description: 'Initiated the new product development project.',
    details: 'Our team gathered for an intensive brainstorming session, outlining the project scope, defining key milestones, and assigning initial roles and responsibilities.',
    image: Events
  },
  {
    id: 2,
    date: '2023-03-22',
    title: 'Title',
    description: 'Finished the first working prototype of the product.',
    details: 'After weeks of hard work, we successfully created our first functional prototype. This version included core features and gave us a tangible product to test and refine.',
    image: Events
  },
  {
    id: 3,
    date: '2023-06-10',
    title: 'Title',
    description: 'Conducted extensive user testing with focus groups.',
    details: 'We organized multiple focus groups to gather user feedback. Participants interacted with our prototype, providing invaluable insights on usability, features, and overall user experience.',
    image: Events
  },
  {
    id: 4,
    date: '2023-09-05',
    title: 'Title',
    description: 'Implemented final revisions based on user feedback.',
    details: 'Taking into account all the feedback from our user testing phase, we made significant improvements to the product. This included UI/UX enhancements, feature adjustments, and performance optimizations.',
    image: Events
  },
  {
    id: 5,
    date: '2023-11-20',
    title: 'Title',
    description: 'Successfully launched the product to the market.',
    details: 'After months of development and refinement, we officially launched our product. The launch included a marketing campaign, press releases, and a special event for early adopters and industry influencers.',
    image: Events
  },
];

export default function EnhancedScrollTimeline() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = events.map((event, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveEvent(event.id);
            }
          });
        },
        { 
          threshold: 0.5,
          rootMargin: '-25% 0px -25% 0px'
        }
      );

      if (observerRefs.current[index]) {
        observer.observe(observerRefs.current[index]);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleCardClick = (id) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  return (
    <div className=''>
      
    <div className="relative w-full mx-auto p-4 bg-gradient-to-b from-[#F01010] via-[#000000] to-[#F01010] min-h-screen">
    <h1 className='text-6xl font-bold text-center
       mt-[5vh] mb-20px'>Elicit Events</h1>
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-foreground transform -translate-x-1/2 rounded-full" />
      {events.map((event, index) => (
        <div
          key={event.id}
          ref={(el) => (observerRefs.current[index] = el)}
          className={`relative mb-24 transition-transform duration-[1s] ease-in-out mx-auto ${
            activeEvent === event.id ? 'scale-110 opacity-100' : 'scale-65 opacity-50'
          } ${index === 0 ? 'mt-32' : ''}`}  // Increase top margin for the first card
        >
          <div className="flex items-center justify-center mb-4">
            <span 
              className={`text-sm font-semibold text-primary bg-primary-foreground/10 px-3 py-1 rounded-full inline-block transition-all duration-[1s] ease-in-out ${
                activeEvent === event.id ? 'scale-200' : 'scale-80'
              }`}
            >
              {event.date}
            </span>
            <div 
              className={`w-6 h-6 bg-black rounded-full shadow-lg z-10 ml-4 transition-all duration-[1s] ease-in-out ${ // Changed dot color to green
                activeEvent === event.id ? 'scale-165' : 'scale-100'
              }`}
            />
          </div>
          <div
            onClick={() => handleCardClick(event.id)}
            className={`bg-gradient-to-r from-pink-500 to-rose-600 p-6 rounded-xl shadow-lg cursor-pointer border hover:shadow-xl transition-all duration-[1s] ease-in-out w-5/6 md:w-2/5 mx-auto ${
              expandedEvent === event.id ? 'h-full md:w-3/5' : ''
            }`}
          >
            <div className="flex flex-col flex-col gap-6">
              <div className="w-full md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-primary">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                {expandedEvent === event.id && (
                  <div className="transition-all duration-[1s] ease-in-out">
                    <p className="text-sm text-gray-700 leading-relaxed">{event.details}</p>
                    <button
                      className="mt-4 px-4 py-2 bg-black text-white rounded-xl shadow-xl hover:bg-primary-dark transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
