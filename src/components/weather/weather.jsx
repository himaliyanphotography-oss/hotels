"use client";

import React, { useEffect, useState } from "react";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

        if (!API_KEY) {
          throw new Error("Missing API key");
        }

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Kausani&units=metric&appid=${API_KEY}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await res.json();

        setWeather({
          location: data.name,
          temperature: Math.round(data.main.temp),
          condition: data.weather[0].main,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          high: Math.round(data.main.temp_max),
          low: Math.round(data.main.temp_min),
        });

      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // ⏳ Loading
  if (loading) {
    return (
      <div className="flex items-center justify-center bg-black text-white py-20">
        <p className="animate-pulse">Fetching weather...</p>
      </div>
    );
  }

  // ❌ Error
  if (error) {
    return (
      <div className="flex items-center justify-center bg-black text-red-400 py-20">
        <p>Unable to load weather</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-black py-20 px-4">
      <div className="relative w-80 rounded-3xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl opacity-50"></div>

        <div className="relative z-10 text-white">
          <h2 className="text-center text-lg opacity-80">
            {weather.location}
          </h2>

          <div className="flex justify-center my-4">
            <img src={weather.icon} alt="weather" className="w-24 h-24" />
          </div>

          <div className="text-center">
            <h1 className="text-6xl font-bold">
              {weather.temperature}°
            </h1>
            <p className="opacity-70">{weather.condition}</p>
          </div>

          <div className="h-px bg-white/10 my-6"></div>

          <div className="flex justify-between text-sm">
            <span>High {weather.high}°</span>
            <span>Low {weather.low}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;