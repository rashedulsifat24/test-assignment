import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name,img,des,sdes,id}=service;
    return (
        <>
        <div className="col">
          <div className="card">
             <img src={img} alt=""/>
             <div className="card-body">
                 <span>{sdes}</span>
                 <h4 style={{color:"#153D8F"}} className="card-title mb-3 mt-3">{name}</h4>
                 <p className="card-text">{des}</p>
             </div>
            <div className="card-footer">
                <Link to={`/booking/${id}`}>
                        <button  className="btn border" style={{color:"black",backgroundColor:"#FAE20D"}}>Booking {name}</button>
                </Link>
            </div>
           </div>
        </div>
        </>
    );
};

export default Service;