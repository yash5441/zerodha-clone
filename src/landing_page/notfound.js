import React from 'react';
import {Link} from 'react-router-dom';
function NotFound() {
    return ( 
        <div className='container p-3'>
            <div className='row text-center'>
                <h1>404 not found</h1>
                <p>SORRY, the page that you are looking for does not exist. </p>
                <Link to="/"><button className='p-2 btn btn-primary fs-4 mb-3' style={{width:"10%" , margin:"0 auto"}}>GO HOME</button></Link>
            </div>
        </div>
     );
}

export default NotFound;