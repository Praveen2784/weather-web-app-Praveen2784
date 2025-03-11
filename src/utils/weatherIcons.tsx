import React from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Cloudy, CloudDrizzle } from 'lucide-react';

export const getWeatherIcon = (weatherMain: string) => {
  switch (weatherMain.toLowerCase()) {
    case 'clear':
      return <Sun className="w-8 h-8 text-yellow-500" />;
    case 'rain':
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    case 'snow':
      return <CloudSnow className="w-8 h-8 text-blue-200" />;
    case 'thunderstorm':
      return <CloudLightning className="w-8 h-8 text-yellow-600" />;
    case 'drizzle':
      return <CloudDrizzle className="w-8 h-8 text-blue-400" />;
    case 'clouds':
      return <Cloudy className="w-8 h-8 text-gray-500" />;
    default:
      return <Cloud className="w-8 h-8 text-gray-400" />;
  }
};