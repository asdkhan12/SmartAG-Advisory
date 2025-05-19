// server/index.js
require('dotenv').config();
const express = require('express');
const axios   = require('axios');
const app     = express();
const PORT    = process.env.PORT || 4000;

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

// 1) Current weather
app.get('/api/current-weather', async (req, res) => {
  const { location } = req.query;
  if (!location) return res.status(400).json({ error: 'location required' });

  try {
    const r = await axios.get(
      `http://api.weatherapi.com/v1/current.json?` +
      `key=${WEATHER_API_KEY}&q=${encodeURIComponent(location)}&aqi=no`
    );
    const c = r.data.current;
    res.json({
      temperature:   c.temp_c,
      humidity:      c.humidity,
      wind_speed:    c.wind_kph,
      precipitation: c.precip_mm,
      description:   c.condition.text,
      icon:          `https:${c.condition.icon}`
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'failed to fetch current weather' });
  }
});

// 2) 7-day forecast
app.get('/api/forecast', async (req, res) => {
  const { location } = req.query;
  if (!location) return res.status(400).json({ error: 'location required' });

  try {
    const r = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?` +
      `key=${WEATHER_API_KEY}&q=${encodeURIComponent(location)}` +
      `&days=7&aqi=no&alerts=no`
    );
    const days = r.data.forecast.forecastday.map(d => ({
      date:        d.date,
      high_temp:   d.day.maxtemp_c,
      low_temp:    d.day.mintemp_c,
      rain_chance: d.day.daily_chance_of_rain,
      description: d.day.condition.text,
      icon:        `https:${d.day.condition.icon}`
    }));
    res.json({ forecast: days });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'failed to fetch forecast' });
  }
});

app.listen(PORT, () => {
  console.log(`Server up on http://localhost:${PORT}`);
});
