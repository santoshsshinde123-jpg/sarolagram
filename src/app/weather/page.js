"use client";

import { useEffect, useState } from "react";

export default function WeatherPage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  if (!weather) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          हवामान माहिती लोड होत आहे...
        </h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white p-10 md:p-14 shadow-2xl">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">

            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                🌤️ हवामान अंदाज
              </h1>

              <p className="mt-4 text-lg md:text-xl text-blue-100">
                 {weather.name}, महाराष्ट्र
              </p>

              <p className="mt-2 text-blue-200">
                ग्रामपंचायत नागरिकांसाठी रिअल-टाइम हवामान माहिती
              </p>

              <div className="mt-6 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                📅 {new Date(weather.dt * 1000).toLocaleString("en-IN")}
              </div>
            </div>

            <div className="mt-8 md:mt-0 text-center">

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="Weather Icon"
                className="w-32 h-32 mx-auto"
              />

              <div className="text-6xl font-bold">
                {Math.round(weather.main.temp)}°
              </div>

              <div className="text-xl capitalize text-blue-100">
                {weather.weather[0].description}
              </div>

            </div>

          </div>

        </div>

        {/* Main Weather Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <div className="text-5xl">🌡️</div>
            <h3 className="mt-4 text-gray-500">तापमान</h3>
            <p className="text-4xl font-bold text-blue-600">
              {Math.round(weather.main.temp)}°C
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="mx-auto w-20 h-20"
            />

            <h3 className="text-gray-500">हवामान</h3>

            <p className="text-lg font-bold capitalize">
              {weather.weather[0].description}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <div className="text-5xl">💧</div>
            <h3 className="mt-4 text-gray-500">आर्द्रता</h3>
            <p className="text-4xl font-bold text-green-600">
              {weather.main.humidity}%
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <div className="text-5xl">💨</div>
            <h3 className="mt-4 text-gray-500">वाऱ्याचा वेग</h3>
            <p className="text-4xl font-bold text-purple-600">
              {weather.wind.speed}
            </p>
          </div>

        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <div className="text-5xl">🥵</div>
            <h3 className="mt-4 text-gray-500">
              अनुभवलेले तापमान
            </h3>
            <p className="text-3xl font-bold text-red-500">
              {Math.round(weather.main.feels_like)}°C
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <div className="text-5xl">👁️</div>
            <h3 className="mt-4 text-gray-500">
              दृश्यमानता
            </h3>
            <p className="text-3xl font-bold text-blue-500">
              {(weather.visibility / 1000).toFixed(1)} km
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <div className="text-5xl">☁️</div>
            <h3 className="mt-4 text-gray-500">
              ढगांचे प्रमाण
            </h3>
            <p className="text-3xl font-bold text-gray-600">
              {weather.clouds.all}%
            </p>
          </div>

        </div>

        {/* Sunrise & Sunset */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

          <h2 className="text-2xl font-bold mb-25 text-center" >
            🌅 सूर्योदय व सूर्यास्त
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="text-center">
              <div className="text-5xl">🌅</div>
              <h3 className="mt-3 font-semibold">
                सूर्योदय
              </h3>
              <p className="text-xl">
                {new Date(
                  weather.sys.sunrise * 1000
                ).toLocaleTimeString("en-IN")}
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl">🌇</div>
              <h3 className="mt-3 font-semibold">
                सूर्यास्त
              </h3>
              <p className="text-xl">
                {new Date(
                  weather.sys.sunset * 1000
                ).toLocaleTimeString("en-IN")}
              </p>
            </div>

          </div>

        </div>

        {/* Farmer Advisory */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-3xl p-8 mt-8 shadow-lg">

          <h2 className="text-2xl font-bold text-green-700">
            🌾 शेतकरी सूचना
          </h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>
              ✔ तापमान: {Math.round(weather.main.temp)}°C
            </li>
            <li>
              ✔ आर्द्रता: {weather.main.humidity}%
            </li>
            <li>
              ✔ वाऱ्याचा वेग: {weather.wind.speed} m/s
            </li>
            <li>
              ✔ हवामान: {weather.weather[0].description}
            </li>
          </ul>

        </div>

      </div>

    </main>
  );
}