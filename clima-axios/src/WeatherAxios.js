import React, { useState } from 'react';
import axios from 'axios';

const WeatherAxios = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const API_KEY = 'f4d3d0f8ffa543c35ed59e54b807111e'; // Pegue em openweathermap.org

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      
      setWeather(response.data);
   
    } catch (error) {
      alert('Erro ao buscar clima. Verifique o nome da cidade.');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Consulta de Clima com Axios</h2>
      <input
        type="text"
        placeholder="Digite a cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={getWeather} style={{ padding: '0.5rem 1rem' }}>
        Buscar
      </button>

      {weather && (
        <div style={{ marginTop: '2rem' }}>
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>🌡️ {weather.main.temp}°C</p>
          <p>💧 Umidade: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherAxios;