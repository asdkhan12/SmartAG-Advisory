import React, { useState, useEffect } from 'react';
import './App.css';

export default function Advisory() {
  const [q, setQ]         = useState('');
  const [loc, setLoc]     = useState('Bogota');
  const [cur, setCur]     = useState(null);
  const [fc, setFc]       = useState([]);
  const [open, setOpen]   = useState({ irr:false, plant:false, warn:false });

  useEffect(() => {
    async function load() {
      setCur(await fetch(`/api/current-weather?location=${loc}`).then(r=>r.json()));
      const res = await fetch(`/api/forecast?location=${loc}`).then(r=>r.json());
      setFc(res.forecast);
    }
    load();
  }, [loc]);

  const submit = e => {
    e.preventDefault();
    if (!q.trim()) return;
    setLoc(q.trim());
    setQ('');
  };

  const toggle = key => setOpen(o=>({...o,[key]:!o[key]}));

  const irr = cur?.precipitation < 5
    ? 'Low rain—consider irrigation.'
    : 'Enough rain—skip irrigation.';
  const plant = fc.every(d=>d.rain_chance<30)
    ? 'Dry forecast—good for planting.'
    : 'Too wet—wait to plant.';
  const warn = fc
    .filter(d=>d.rain_chance>70||d.high_temp>35)
    .map(d=>`${d.date}: ${d.rain_chance>70?'Heavy rain':''}${d.high_temp>35?' High heat':''}`)
    .join(' • ') || 'No severe alerts.';

  return (
    <div>
      <h1>Agricultural Advisory</h1>
      <form onSubmit={submit}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Enter city…" />
        <button>Go</button>
      </form>

      {cur
        ? <div className="card">
            <h2>Current for {loc}</h2>
            <p>🌡 {cur.temperature}°C</p>
            <p>💧 {cur.humidity}%</p>
            <p>☔ {cur.precipitation} mm</p>
          </div>
        : <p>Loading current…</p>
      }

      <div className="card">
        <button onClick={()=>toggle('irr')}>
          {open.irr? '▾':'▸'} Irrigation
        </button>
        {open.irr && <p>{irr}</p>}

        <button onClick={()=>toggle('plant')}>
          {open.plant? '▾':'▸'} Planting
        </button>
        {open.plant && <p>{plant}</p>}

        <button onClick={()=>toggle('warn')}>
          {open.warn? '▾':'▸'} Warnings
        </button>
        {open.warn && <p>{warn}</p>}
      </div>
    </div>
  );
}
