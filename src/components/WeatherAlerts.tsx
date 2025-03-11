import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { AlertTriangle } from 'lucide-react';
import { WeatherAlert } from '../types/weather';
import { format } from 'date-fns';

interface WeatherAlertsProps {
  alerts: WeatherAlert[];
}

const WeatherAlerts: React.FC<WeatherAlertsProps> = ({ alerts }) => {
  const { darkMode } = useTheme();

  if (!alerts.length) return null;

  return (
    <div className={`p-6 rounded-xl shadow-lg ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-6 h-6 text-red-500" />
        <h3 className="text-xl font-semibold">Weather Alerts</h3>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div 
            key={index}
            className="border-l-4 border-red-500 pl-4 py-2"
          >
            <div className="font-semibold text-red-500">{alert.event}</div>
            <div className="text-sm text-gray-500">
              From: {format(new Date(alert.start * 1000), 'PPp')}
              <br />
              To: {format(new Date(alert.end * 1000), 'PPp')}
            </div>
            <p className="mt-2 text-sm">{alert.description}</p>
            <div className="mt-1 text-xs text-gray-500">
              Source: {alert.sender_name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherAlerts;