import React from 'react';

function Hero() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="pe-lg-5">
              <h1 className="display-4 fw-bold mb-4">Technology that powers India's largest broker</h1>
              <p className="lead text-muted mb-4">Cut through the clutter and open a trading account that's light on your pocket and heavy on features.</p>
              <button className="btn btn-primary btn-lg px-4">Sign up now</button>
            </div>
          </div>
          <div className="col-6">
            <img src="/images/signup.png" alt="Trading Platform" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;