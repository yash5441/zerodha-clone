import React from 'react';

function Universe() {
  return (
    <div className="container py-5">
      <div className="universe-section text-center">
        <h2 className="display-5 mb-5">The Zerodha Universe</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4">
                <h3 className="h4 mb-3">Varsity</h3>
                <p className="text-muted">Free and open financial education</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4">
                <h3 className="h4 mb-3">Trading Q&A</h3>
                <p className="text-muted">Community platform for traders</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4">
                <h3 className="h4 mb-3">Broking API</h3>
                <p className="text-muted">Build trading platforms</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;