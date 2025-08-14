import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
function Productpage() {
  return (
    <div className="min-vh-100">
      <Hero />
      <div className="container py-5">
        <div className="row">
          <Leftsection />
          <Rightsection />
        </div>
        <Universe />
      </div>
    </div>
  )
}
export default Productpage;