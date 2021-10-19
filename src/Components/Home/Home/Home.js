import React from 'react';
import './Home.css'
import Baner from './../Baner/Baner';
import Services from './../Services/Services';
import LatesNews from './../LatesNews/LatesNews';
import OurTeam from '../OurTeam/OurTeam';
const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <Services></Services>
            <OurTeam></OurTeam>
            <LatesNews></LatesNews>
        </div>
    );
};

export default Home;