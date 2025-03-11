import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Wind } from 'lucide-react';
import { AirQualityData } from '../types/weather';

interface AirQualityCardProps {
  data: AirQualityData;
}

const AirQualityCard: React.FC<AirQualityCardProps> = ({ data }) => {
  const { darkMode } = useTheme();
  const aqi = data.list[0].main.aqi;
  const components = data.list[0].components;

  const getAQILevel = (aqi: number) => {
    switch (aqi) {
      case 1: return { text: 'Good', color: 'text-green-500' };
      case 2: return { text: 'Fair', color: 'text-yellow-500' };
      case 3: return { text: 'Moderate', color: 'text-orange-500' };
      case 4: return { text: 'Poor', color: 'text-red-500' };
      case 5: return { text: 'Very Poor', color: 'text-purple-500' };
      default: return { text: 'Unknown', color: 'text-gray-500' };
    }
  };

  const aqiInfo = getAQILevel(aqi);

  return (
    <div className={`p-6 rounded-xl shadow-lg ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <Wind className="w-6 h-6 text-blue-500" />
        <h3 className="text-xl font-semibold">Air Quality</h3>
      </div>

      <div className="mb-6">
        <div className={`text-2xl font-bold ${aqiInfo.color}`}>
          {aqiInfo.text}
        </div>
        <p className="text-sm text-gray-500">Air Quality Index: {aqi}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">PM2.5</p>
          <p className="font-semibold">{components.pm2_5.toFixed(1)} µg/m³</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">PM10</p>
          <p className="font-semibold">{components.pm10.toFixed(1)} µg/m³</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">NO₂</p>
          <p className="font-semibold">{components.no2.toFixed(1)} µg/m³</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">O₃</p>
          <p className="font-semibold">{components.o3.toFixed(1)} µg/m³</p>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;