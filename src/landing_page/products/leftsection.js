import React from 'react';

function Leftsection() {
  return (
    <div className="left-section">
      <div className="feature-card">
        <h2>Kite</h2>
        <p>Our flagship trading platform with streaming market data, advanced charts, and more.</p>
        <ul>
          <li>Advanced charting</li>
          <li>Real-time streaming</li>
          <li>Multi-platform access</li>
        </ul>
      </div>
      <div className="feature-card">
        <h2>Console</h2>
        <p>The central dashboard for your Zerodha account.</p>
      </div>
    </div>
  );
}

export default Leftsection;