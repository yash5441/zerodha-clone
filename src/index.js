import React from 'react';
import ReactDOM from 'react-dom/client';
import {browserRouter, Routes, Route, BrowserRouter} from "react-router-dom"
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import Aboutpage from './landing_page/about/Aboutpage';
import Productpage from './landing_page/products/Hero';
import Pricing from './landing_page/pricing/Pricingpage';
import Supportpage from './landing_page/support/';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<Aboutpage />}></Route>
      <Route path="/product" element={<Productpage />}></Route>
      <Route path="/Pricing" element={<Pricing />}></Route>
      <Route path="/support" element={<Supportpage />}></Route>
    </Routes>
  </BrowserRouter>
);
