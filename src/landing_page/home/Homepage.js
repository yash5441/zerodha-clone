import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Footer from '../Footer';
import Topnav from '../Topnav';
import Openaccount from '../Openaccount';
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
            <Footer />

        </>
     );
}

export default Homepage;