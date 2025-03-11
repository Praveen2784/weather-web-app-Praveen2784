import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Theater } from '../types';

interface TheaterListProps {
  theaters: Theater[];
}

const TheaterList: React.FC<TheaterListProps> = ({ theaters }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {theaters.map(theater => (
        <div key={theater.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={theater.imageUrl} 
            alt={theater.name} 
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-xl mb-3">{theater.name}</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                <span>{theater.address}</span>
              </div>
              <div className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                <span>{theater.phone}</span>
              </div>
              <div className="flex">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                <span>{theater.hours}</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                View Showtimes
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md transition-colors">
                More Info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TheaterList;