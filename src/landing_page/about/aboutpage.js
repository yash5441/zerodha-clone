import React from 'react';
import Hero from './Hero';
import Team from './Team';
import Topnav from '../Topnav';
import Footer from '../Footer';
import Openaccount from '../Openaccount';
function Aboutpage() {
    return ( 
        <>
            <Topnav/>
            <Hero />
            <Team/>
            <Openaccount/>
            <Footer/>


        </>
     );
}

export default Aboutpage;