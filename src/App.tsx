import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Moon, Sun, Loader2 } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherMap from './components/WeatherMap';
import ForecastSection from './components/ForecastSection';
import HourlyForecast from './components/HourlyForecast';
import AirQualityCard from './components/AirQualityCard';
import WeatherAlerts from './components/WeatherAlerts';
import { WeatherData, ForecastData, AirQualityData, WeatherAlert, HourlyForecast as HourlyForecastType } from './types/weather';

const API_KEY = '04378e5bc23f4dd4069f72330d579db9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const WeatherApp: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [airQualityData, setAirQualityData] = useState<AirQualityData | null>(null);
  const [alerts, setAlerts] = useState<WeatherAlert[]>([]);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecastType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { darkMode, toggleDarkMode } = useTheme();

  const fetchAllWeatherData = async (city: string) => {
    try {
      const weatherResponse = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });

      const [forecastResponse, airQualityResponse] = await Promise.all([
        axios.get(`${BASE_URL}/forecast`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
          }
        }),
        axios.get(`${BASE_URL}/air_pollution`, {
          params: {
            lat: weatherResponse.data.coord.lat,
            lon: weatherResponse.data.coord.lon,
            appid: API_KEY
          }
        })
      ]);

      // Process hourly forecast data
      const hourlyData = forecastResponse.data.list.slice(0, 24).map((item: any) => ({
        dt: item.dt,
        temp: item.main.temp,
        weather: item.weather,
        pop: item.pop
      }));

      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setAirQualityData(airQualityResponse.data);
      setHourlyForecast(hourlyData);
      setAlerts(weatherResponse.data.alerts || []);
    } catch (err) {
      throw new Error('Failed to fetch weather data');
    }
  };

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);

    try {
      await fetchAllWeatherData(city);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
      setForecastData(null);
      setAirQualityData(null);
      setHourlyForecast([]);
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Get user's location on initial load
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
              appid: API_KEY,
              units: 'metric'
            }
          });
          handleSearch(response.data.name);
        } catch (err) {
          setError('Failed to get weather for your location');
        }
      });
    }
  }, []);

  return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Weather Forecast
            </h1>
            <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                    darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-white text-gray-800'
                } shadow-lg`}
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          <SearchBar onSearch={handleSearch} />

          {loading && (
              <div className="flex items-center justify-center mt-8">
                <Loader2 className={`w-8 h-8 animate-spin ${darkMode ? 'text-white' : 'text-gray-800'}`} />
              </div>
          )}

          {error && (
              <div className={`mt-8 text-red-500 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}>
                {error}
              </div>
          )}

          {weatherData && (
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <WeatherCard data={weatherData} />
                  {hourlyForecast.length > 0 && <HourlyForecast data={hourlyForecast} />}
                  {forecastData && <ForecastSection data={forecastData} />}
                  {alerts.length > 0 && <WeatherAlerts alerts={alerts} />}
                </div>
                <div className="space-y-8">
                  <WeatherMap coordinates={weatherData.coord} />
                  {airQualityData && <AirQualityCard data={airQualityData} />}
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

const App: React.FC = () => {
  return (
      <ThemeProvider>
        <WeatherApp />
      </ThemeProvider>
  );
};

export default App;