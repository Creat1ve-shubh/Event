import React from 'react';
import {Events} from '../assets/images'

const events = [
  {
    id: 1,
    title: 'Decode',
    image: Events,
    description: 'Unravel the mysteries of coding and algorithms in this exciting event.'
  },
  {
    id: 2,
    title: 'Futsal',
    image: Events,
    description: 'Experience the thrill of fast-paced indoor soccer in our Futsal tournament.'
  },
  {
    id: 3,
    title: 'Elevate',
    image: Events,
    description: 'Take your skills to new heights with our professional development workshops.'
  },
  {
    id: 4,
    title: 'Hella no',
    image: Events,
    description: 'Challenge conventional thinking and push boundaries in this unconventional event.'
  },
];

const EventPanel = ({ title, image, description }) => (
  <div className="bg-black rounded-lg overflow-hidden flex transition-all duration-200 hover:scale-125 group">
    <div className="w-2/3">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="w-1/3 relative">
      <div className="absolute inset-0 flex items-center justify-center p-4 bg-black transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-red-500 text-3xl font-bold text-center">{title}</h3>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm font-bold text-center mb-4">{description}</p>
        <button className="bg-red-500 text-white px-5 py-2 font-bold rounded-xl hover:bg-red-600 transition-colors duration-300 text-xs">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default function ElicitEvents() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 to-black p-8">
      <h1 className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
        ELICIT EVENTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <EventPanel
            key={event.id}
            title={event.title}
            image={event.image}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}