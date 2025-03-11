import React from 'react';
import { format } from 'date-fns';
import { useTheme } from '../context/ThemeContext';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { HourlyForecast as HourlyForecastType } from '../types/weather';
import { getWeatherIcon } from '../utils/weatherIcons';

interface HourlyForecastProps {
  data: HourlyForecastType[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ data }) => {
  const { darkMode } = useTheme();

  const chartData = data.map(hour => ({
    time: format(new Date(hour.dt * 1000), 'HH:mm'),
    temp: Math.round(hour.temp),
    weather: hour.weather[0].main,
    pop: hour.pop * 100
  }));

  return (
    <div className={`p-6 rounded-xl shadow-lg ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }`}>
      <h3 className="text-xl font-semibold mb-4">Hourly Forecast</h3>
      
      <div className="h-[200px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis 
              dataKey="time" 
              stroke={darkMode ? '#9CA3AF' : '#4B5563'}
              fontSize={12}
            />
            <YAxis
              stroke={darkMode ? '#9CA3AF' : '#4B5563'}
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
                border: 'none',
                borderRadius: '0.5rem',
                color: darkMode ? '#FFFFFF' : '#000000'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-6 gap-4 overflow-x-auto">
        {data.slice(0, 6).map((hour, index) => (
          <div key={index} className="text-center">
            <div className="text-sm font-medium">
              {format(new Date(hour.dt * 1000), 'HH:mm')}
            </div>
            <div className="my-2">
              {getWeatherIcon(hour.weather[0].main)}
            </div>
            <div className="font-bold">
              {Math.round(hour.temp)}°C
            </div>
            <div className="text-xs text-blue-500">
              {Math.round(hour.pop * 100)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;