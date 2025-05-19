import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';

export default function Home() {
  const [q, setQ]         = useState('');
  const [loc, setLoc]     = useState('Bogota');
  const [current, setCur] = useState(null);
  const [forecast, setFc] = useState([]);

  useEffect(() => {
    async function load() {
      const c = await fetch(`/api/current-weather?location=${loc}`).then(r=>r.json());
      setCur(c);
      const f = await fetch(`/api/forecast?location=${loc}`).then(r=>r.json());
      setFc(f.forecast);
    }
    load();
  }, [loc]);

  const submit = e => {
    e.preventDefault();
    if (!q.trim()) return;
    setLoc(q.trim());
    setQ('');
  };

  const chart = current && {
    labels: ['Temp','Hum','Wind','Rain'],
    datasets: [{ data: [current.temperature, current.humidity, current.wind_speed, current.precipitation],
      backgroundColor: ['#e07a5f','#3d405b','#81b29a','#f2cc8f'] }]
  };

  return (
    <div>
      <h1>Weather Lookup</h1>
      <form onSubmit={submit}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Enter city…" />
        <button>Search</button>
      </form>

      {current
        ? <div className="card">
            <h2>Current for {loc}</h2>
            <ul style={{ listStyle:'none', padding:0 }}>
              <li>🌡 {current.temperature}°C</li>
              <li>💧 {current.humidity}%</li>
              <li>💨 {current.wind_speed} km/h</li>
              <li>☔ {current.precipitation} mm</li>
              <li>📝 {current.description}</li>
            </ul>
            <div style={{ maxWidth:300, margin:'auto' }}>
              <Doughnut data={chart}/>
            </div>
          </div>
        : <p>Loading current…</p>
      }

      <h2>7-Day Forecast</h2>
      {forecast.length
        ? <div className="forecast-grid">
            {forecast.map(d=>(
              <div className="card" key={d.date}>
                <h3>{d.date}</h3>
                <p>High: {d.high_temp}°C</p>
                <p>Low: {d.low_temp}°C</p>
                <p>Rain: {d.rain_chance}%</p>
              </div>
            ))}
          </div>
        : <p>Loading forecast…</p>
      }
    </div>
  );
}
