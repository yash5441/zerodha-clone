import React from 'react';

function Awards() {
    return (  
       <div className='container p-5 mb-5'>
           <div className='row'>
               <div className='col-6'>
                   <img src='/images/largestbroker.svg' alt='largest broker' />
               </div>
               <div className='col-6'>
                    <h1>Largest Stock Broker in India</h1>
                    <p>2 million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in: </p>
                    <div className='row'>  
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                    </div>
               </div>
           </div>
       </div>
    );
}

export default Awards;
