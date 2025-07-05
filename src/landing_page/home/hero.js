import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5 '>
            <div className='row text-center'>
                <img src="/images/homeHero.png" className="mx-auto d-block" style={{width: "80%"}} alt="hero image" />
                <h1 className='pt-5'>INVEST IN EVERYTHING</h1>
                <p >Online platform to invest in stocks, derivatives, mutual funds etc. </p>
                <button className='p-2 btn btn-primary fs-4 mb-3' style={{width:"15%" , margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;
