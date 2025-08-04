import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import './Productpage.css';

function Productpage() {
  return (
    <div className="product-page">
      <Hero />
      <div className="product-sections">
        <Leftsection />
        <Rightsection />
      </div>
      <Universe />
    </div>
  )
}
export default Productpage;