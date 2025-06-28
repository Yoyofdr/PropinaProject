import React, { useState, useEffect } from 'react';

export default function TipCalculator({ tipPercentages, translations, showTitle = true }) {
  // Normalizar tipPercentages para aceptar ambos formatos
  let normalized = {};
  if (tipPercentages && typeof tipPercentages === 'object') {
    Object.entries(tipPercentages).forEach(([key, value]) => {
      if (typeof value === 'number') {
        normalized[key] = { percent: value, note: '' };
      } else if (typeof value === 'object' && value !== null) {
        normalized[key] = { percent: value.percent || 0, note: value.note || '' };
      }
    });
  }
  const serviceKeys = Object.keys(normalized);
  const [amount, setAmount] = useState(0);
  const [service, setService] = useState(serviceKeys[0] || '');
  const [customPercent, setCustomPercent] = useState(normalized[service]?.percent || 0);
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    if (!isCustom) {
      setCustomPercent(normalized[service]?.percent || 0);
    }
  }, [service, normalized, isCustom]);

  const handlePercentChange = (e) => {
    setCustomPercent(Number(e.target.value));
    setIsCustom(true);
  };

  const percent = customPercent;
  const note = normalized[service]?.note || '';
  const tip = amount * percent / 100;
  const total = Number(amount) + tip;

  if (serviceKeys.length === 0) {
    return <div className="tip-card"><p>{translations["no_services"] || "No hay servicios disponibles para calcular propina."}</p></div>;
  }

  return (
    <div className="tip-card">
      {showTitle && <h2>{translations["tip_calculator"]}</h2>}
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="amount-input">{translations["amount"]}
          <input
            id="amount-input"
            type="number"
            min="0"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </label>
        <label htmlFor="service-select">{translations["service_type"]}
          <select id="service-select" value={service} onChange={e => { setService(e.target.value); setIsCustom(false); }}>
            {serviceKeys.map(key => (
              <option value={key} key={key}>{key}</option>
            ))}
          </select>
        </label>
        <label htmlFor="tip-input">{translations["typical_tip"]}
          <input
            id="tip-input"
            type="number"
            min="0"
            max="100"
            value={customPercent}
            onChange={handlePercentChange}
          />
          %
        </label>
        <div>
          <strong>{translations["total_with_tip"]}:</strong> {total.toFixed(2)}
        </div>
        {note && <div className="tip-note">{note}</div>}
      </form>
    </div>
  );
} 