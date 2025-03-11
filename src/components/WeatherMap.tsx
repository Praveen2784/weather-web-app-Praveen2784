import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTheme } from '../context/ThemeContext';

interface WeatherMapProps {
  coordinates: {
    lat: number;
    lon: number;
  };
}

const WeatherMap: React.FC<WeatherMapProps> = ({ coordinates }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'border border-gray-700' : ''}`}>
      <MapContainer
        center={[coordinates.lat, coordinates.lon]}
        zoom={10}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url={darkMode 
            ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
            : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }
        />
        <Marker position={[coordinates.lat, coordinates.lon]}>
          <Popup>
            Weather location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;