import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface ShowtimeSelectorProps {
  dates: string[];
  theaters: string[];
  showtimes: {
    theater: string;
    time: string;
    type: string;
  }[];
}

const ShowtimeSelector: React.FC<ShowtimeSelectorProps> = ({ dates, theaters, showtimes }) => {
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTheater, setSelectedTheater] = useState('all');

  const filteredShowtimes = selectedTheater === 'all' 
    ? showtimes 
    : showtimes.filter(showtime => showtime.theater === selectedTheater);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Showtimes</h3>
      
      {/* Date Selector */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Calendar className="h-5 w-5 mr-2 text-blue-600" />
          <h4 className="font-semibold">Select Date</h4>
        </div>
        <div className="flex overflow-x-auto pb-2 space-x-2">
          {dates.map(date => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                selectedDate === date
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>
      
      {/* Theater Selector */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Clock className="h-5 w-5 mr-2 text-blue-600" />
          <h4 className="font-semibold">Select Theater</h4>
        </div>
        <select
          value={selectedTheater}
          onChange={(e) => setSelectedTheater(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Theaters</option>
          {theaters.map(theater => (
            <option key={theater} value={theater}>{theater}</option>
          ))}
        </select>
      </div>
      
      {/* Showtimes */}
      <div>
        <h4 className="font-semibold mb-3">Available Showtimes for {selectedDate}</h4>
        {filteredShowtimes.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredShowtimes.map((showtime, index) => (
              <div key={index} className="text-center">
                <button className="w-full bg-gray-100 hover:bg-gray-200 py-3 px-2 rounded-md transition-colors">
                  <div className="font-semibold">{showtime.time}</div>
                  <div className="text-xs text-gray-600">{showtime.type}</div>
                </button>
                <div className="text-xs mt-1 text-gray-600">{showtime.theater}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No showtimes available for the selected date and theater.</p>
        )}
      </div>
    </div>
  );
};

export default ShowtimeSelector;