import React from 'react';
import { format } from 'date-fns';
import { useTheme } from '../context/ThemeContext';
import { ForecastData } from '../types/weather';
import { getWeatherIcon } from '../utils/weatherIcons';

interface ForecastSectionProps {
  data: ForecastData;
}

const ForecastSection: React.FC<ForecastSectionProps> = ({ data }) => {
  const { darkMode } = useTheme();
  const dailyForecasts = data.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  return (
    <div className={`p-6 rounded-xl shadow-lg ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }`}>
      <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-4">
        {dailyForecasts.map((forecast) => (
          <div key={forecast.dt} className="text-center">
            <div className="font-medium">
              {format(new Date(forecast.dt * 1000), 'EEE')}
            </div>
            <div className="my-2">
              {getWeatherIcon(forecast.weather[0].main)}
            </div>
            <div className="font-bold">
              {Math.round(forecast.main.temp)}°C
            </div>
            <div className="text-sm text-gray-500">
              {forecast.weather[0].main}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;