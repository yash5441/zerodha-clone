import React from 'react';
import Awards from './Awards';
import Topnav from '../topnav';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';



function Homepage() {
    return ( 
        <>
            <Topnav />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            
            <Openaccount />


        </>
     );
}

export default Homepage;