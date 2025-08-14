import React from 'react';

function Leftsection() {
  return (
    <div className="col-lg-6 pe-lg-5">
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h3 mb-3">Kite</h2>
          <p className="text-muted mb-4">Our flagship trading platform with streaming market data, advanced charts, and more.</p>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Advanced charting</li>
            <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Real-time streaming</li>
            <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Multi-platform access</li>
          </ul>
        </div>
      </div>
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h2 className="h3 mb-3">Console</h2>
          <p className="text-muted">The central dashboard for your Zerodha account.</p>
        </div>
      </div>
    </div>
  );
}

export default Leftsection;