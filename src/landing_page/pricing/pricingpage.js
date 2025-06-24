import React from 'react';
import Topnav from '../Topnav';
import Hero from './hero';
import Brokerage from './brokerage';
import Openaccount from '../Openaccount';
import Footer from '../Footer';
function Pricing() {
    return ( 
        <>
            <Topnav/>
            <Hero/>
            <Brokerage/>
            <Openaccount/>
            <Footer/>
        </>
     );
}

export default Pricing;