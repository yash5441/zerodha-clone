import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5 '>
            <div className='row text-center'>
                <img src="/images/homeHero.png" className="mx-auto d-block" style={{width: "64%"}} alt="hero image" />
                <h1 className='pt-5 mb-2 large-heading'>Invest in everything</h1>
                <p >Online platform to invest in stocks, derivatives, mutual funds etc. </p>
                <button className='p-2 btn btn-primary mt-3 fs-5 mb-3' style={{width:"16%" , margin:"0 auto"}}>Signup for free</button>
            </div>
        </div>
     );
}

export default Hero;
