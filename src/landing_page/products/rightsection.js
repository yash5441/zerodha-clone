import React from 'react';

function Rightsection() {
  return (
    <div className="col-lg-6 ps-lg-5">
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h3 mb-3">Coin</h2>
          <p className="text-muted mb-4">Commission-free direct mutual funds investment platform.</p>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Zero commission</li>
            <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Direct mutual funds</li>
            <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Paperless investment</li>
          </ul>
        </div>
      </div>
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h2 className="h3 mb-3">Kite Connect</h2>
          <p className="text-muted">Trading APIs for modern financial applications.</p>
        </div>
      </div>
    </div>
  );
}

export default Rightsection;