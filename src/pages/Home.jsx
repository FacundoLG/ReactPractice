import React from 'react';
import '../assets/styles/pages/Home.css'
import HomeNav from '../components/HomeNav'
import Carousel from '../components/Carousel'
const Home = () =>{
    
    return(
        <div className="home">   
            <HomeNav/>
            <div className="listContainer">
            <Carousel id="1" name="Top10"/>
            <Carousel id="2" name="Pas Peur"/>
            <Carousel id="3" name="TBHC"/>
            <Carousel id="4" name="TBHC"/>
            <Carousel id="5" name="TBHC"/>
            <Carousel id="6" name="TBHC"/>
            </div>
        </div>
    )
}

export default Home