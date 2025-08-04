import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Technology that powers India's largest broker</h1>
        <p>Cut through the clutter and open a trading account that's light on your pocket and heavy on features.</p>
        <button className="cta-button">Sign up now</button>
      </div>
      <div className="hero-image">
        <img src="/images/trading-platform.png" alt="Trading Platform" />
      </div>
    </div>
  );
}

export default Hero;