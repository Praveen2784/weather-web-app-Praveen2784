import React from 'react';
import { format } from 'date-fns';
import { Droplets, Wind, Thermometer, ArrowUp, ArrowDown, Gauge } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { WeatherData } from '../types/weather';
import { getWeatherIcon } from '../utils/weatherIcons';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`p-6 rounded-xl shadow-lg ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">{data.name}, {data.sys.country}</h2>
          <p className="text-sm text-gray-500">
            {format(new Date(), 'EEEE, MMMM d, yyyy')}
          </p>
        </div>
        <div className="text-center">
          {getWeatherIcon(data.weather[0].main)}
          <p className="text-sm mt-1 capitalize">{data.weather[0].description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="text-5xl font-bold mb-4">
            {Math.round(data.main.temp)}°C
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-blue-500" />
              <span>Feels like: {Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUp className="w-5 h-5 text-red-500" />
              <span>High: {Math.round(data.main.temp_max)}°C</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowDown className="w-5 h-5 text-blue-500" />
              <span>Low: {Math.round(data.main.temp_min)}°C</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span>Humidity: {data.main.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-500" />
            <span>Wind: {data.wind.speed} m/s</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-blue-500" />
            <span>Pressure: {data.main.pressure} hPa</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between text-sm">
          <div>
            <p className="text-gray-500">Sunrise</p>
            <p className="font-medium">
              {format(new Date(data.sys.sunrise * 1000), 'HH:mm')}
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Sunset</p>
            <p className="font-medium">
              {format(new Date(data.sys.sunset * 1000), 'HH:mm')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;