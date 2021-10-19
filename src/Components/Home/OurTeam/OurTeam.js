import React from 'react';
import './OurTeam.css'
import reportWebVitals from './../../../reportWebVitals';
const OurTeam = () => {
    return (
        <div className="p-5" style={{backgroundColor:"#DEE0DF"}}>
           <div className="row container p-3 d-flex align-items-center">
               <div className="col-lg-8 col-md-6 col-sm-12  ">
                   <p>Dave Ankle <span>James</span></p>
                   <h1>Our Suggestion</h1>
                   <p>While a full-body workout training split has its advantages, it's best not to do it every day. It's important that your muscles have adequate rest and recovery time to prevent overtraining. So, if you prefer a full-body workout training split, keep it to 2-3 workouts per week for the best results.</p>
                   <img className="img-fluid " src="https://i.ibb.co/1XF5pHW/logo-black.png" alt=""/>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-12">
                   <img className="img-fluid" src="https://kamleshyadav.com/wp/theakhada/multi-page-dark/wp-content/uploads/sites/5/2018/07/offer.png" alt=""/>
               </div>
           </div>
        </div>
    );
};

export default OurTeam;