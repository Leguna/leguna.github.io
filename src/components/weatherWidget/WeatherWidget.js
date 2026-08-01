import React, { useEffect, useState } from "react";
import "./WeatherWidget.css";

const weatherCodeMap = {
  0: { label: "Clear sky", icon: "fa-sun" },
  1: { label: "Mostly clear", icon: "fa-sun" },
  2: { label: "Partly cloudy", icon: "fa-cloud-sun" },
  3: { label: "Overcast", icon: "fa-cloud" },
  45: { label: "Fog", icon: "fa-smog" },
  48: { label: "Rime fog", icon: "fa-smog" },
  51: { label: "Light drizzle", icon: "fa-cloud-rain" },
  53: { label: "Drizzle", icon: "fa-cloud-rain" },
  55: { label: "Heavy drizzle", icon: "fa-cloud-showers-heavy" },
  61: { label: "Light rain", icon: "fa-cloud-rain" },
  63: { label: "Rain", icon: "fa-cloud-showers-heavy" },
  65: { label: "Heavy rain", icon: "fa-cloud-showers-heavy" },
  71: { label: "Light snow", icon: "fa-snowflake" },
  73: { label: "Snow", icon: "fa-snowflake" },
  75: { label: "Heavy snow", icon: "fa-snowflake" },
  80: { label: "Rain showers", icon: "fa-cloud-showers-heavy" },
  81: { label: "Rain showers", icon: "fa-cloud-showers-heavy" },
  82: { label: "Violent rain showers", icon: "fa-bolt" },
  95: { label: "Thunderstorm", icon: "fa-bolt" },
  96: { label: "Thunderstorm with hail", icon: "fa-bolt" },
  99: { label: "Thunderstorm with hail", icon: "fa-bolt" },
};

function getWeatherInfo(weatherCode) {
  return weatherCodeMap[weatherCode] || {
    label: "Weather update",
    icon: "fa-cloud-sun",
  };
}

export default function WeatherWidget({
  theme,
  label = "Pontianak, West Borneo",
  latitude = 0.0263,
  longitude = 109.3425,
}) {
  const [status, setStatus] = useState("loading");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    if (typeof window === "undefined" || typeof window.fetch !== "function") {
      setStatus("error");
      setError("Weather data is unavailable in this browser.");
      return undefined;
    }

    setStatus("loading");
    setError("");

    const request = window.fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=Asia%2FJakarta`
    );

    if (!request || typeof request.then !== "function") {
      setStatus("error");
      setError("Weather request could not be started.");
      return undefined;
    }

    request
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Weather request failed with status ${response.status}.`);
        }

        return response.json();
      })
      .then((data) => {
        if (!isActive) {
          return;
        }

        if (!data.current_weather) {
          throw new Error("Weather data is missing from the response.");
        }

        setWeather(data.current_weather);
        setStatus("success");
      })
      .catch((fetchError) => {
        if (!isActive) {
          return;
        }

        setStatus("error");
        setError(fetchError.message);
      });

    return () => {
      isActive = false;
    };
  }, [latitude, longitude]);

  const weatherInfo = weather ? getWeatherInfo(weather.weathercode) : null;

  return (
    <div
      className="weather-widget"
      style={{
        backgroundColor: theme.body,
        borderColor: theme.highlight,
        color: theme.text,
      }}
    >
      <div className="weather-widget__header">
        <span className="weather-widget__label" style={{ color: theme.secondaryText }}>
          Live temperature (°C)
        </span>
        <span className="weather-widget__location" style={{ color: theme.secondaryText }}>
          {label}
        </span>
      </div>

      {status === "loading" && (
        <div className="weather-widget__state" style={{ color: theme.secondaryText }}>
          Loading temperature...
        </div>
      )}

      {status === "error" && (
        <div className="weather-widget__state" style={{ color: theme.secondaryText }}>
          {error}
        </div>
      )}

      {status === "success" && weather && weatherInfo && (
        <div className="weather-widget__content" aria-live="polite">
          <i className={`fas ${weatherInfo.icon} weather-widget__icon`} aria-hidden="true" />
          <div className="weather-widget__reading">
            <div className="weather-widget__temperature">
              {Math.round(weather.temperature)}°C
            </div>
            <div className="weather-widget__condition" style={{ color: theme.secondaryText }}>
              {weatherInfo.label} · Wind {Math.round(weather.windspeed)} km/h
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
