import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=" p-5">
           <img className="mb-4 img-fluid" src="https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg" alt=""/>
           <br/>
           <Link to="/home">Back to Home</Link>
        </div>
    );
};

export default NotFound;