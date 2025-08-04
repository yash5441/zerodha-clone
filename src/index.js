import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import Aboutpage from './landing_page/about/Aboutpage';
import Productpage from './landing_page/products/Productpage';
import Pricing from './landing_page/pricing/Pricing';
import Supportpage from './landing_page/support/Supportpage';
import Topnav from './landing_page/Topnav';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Topnav />
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/About" element={<Aboutpage />}></Route>
      <Route path="/Product" element={<Productpage />}></Route>
      <Route path="/Pricing" element={<Pricing />}></Route>
      <Route path="/Supportpage" element={<Supportpage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
