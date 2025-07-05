import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5 p-3'>
            <div className='row text-center'>
                <img src="/images/homeHero.png"  alt="hero image" />
                <h1>INVEST IN EVERYTHING</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds etc. </p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;
