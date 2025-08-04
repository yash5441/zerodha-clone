import React from 'react';
import './Universe.css';

function Universe() {
  return (
    <div className="universe-section">
      <h2>The Zerodha Universe</h2>
      <div className="products-grid">
        <div className="product-item">
          <h3>Varsity</h3>
          <p>Free and open financial education</p>
        </div>
        <div className="product-item">
          <h3>Trading Q&A</h3>
          <p>Community platform for traders</p>
        </div>
        <div className="product-item">
          <h3>Broking API</h3>
          <p>Build trading platforms</p>
        </div>
      </div>
    </div>
  );
}

export default Universe;