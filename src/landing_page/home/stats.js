import React from 'react';
function Stats() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>'
                    <h1>Trust with confidence</h1>
                    <h2>Customer-first always</h2>
                    <P>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</P>
                    <h2>No spam or gimmicks</h2>
                    <P>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</P>
                    <h2>The Zerodha universe</h2>
                    <P>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</P>
                    <h2>Do better with money</h2>
                    <P>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</P>
                </div>
                <div className='col-6'>
                    <img src='/images/ecosystem.png' style={{width:"70%"}} />
                </div>
            </div>   
        </div>
     );
}

export default Stats;