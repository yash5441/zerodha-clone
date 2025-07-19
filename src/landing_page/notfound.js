import React from 'react';
function NotFound() {
    return ( 
        <div className='container p-3'>
            <div className='row text-center'>
                <h1>404 not found</h1>
                <p>sORRY, the page that you are looking for does not exist. </p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>GO HOME</button>
            </div>
        </div>
     );
}

export default NotFound;