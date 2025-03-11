import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { events } from '../data/eventData';

const EventsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Special Events</h1>
      
      <div className="grid grid-cols-1 gap-8">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 lg:w-1/4">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3 lg:w-3/4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{event.ageRestriction}</span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-center">
                    <div className="text-sm">Price</div>
                    <div className="text-xl font-bold">{event.price}</div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{event.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                  Book Tickets
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors">
                  More Information
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;