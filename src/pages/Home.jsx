import React from 'react';
import '../assets/styles/pages/Home.css'
import HomeNav from '../components/HomeNav'
import Carousel from '../components/Carousel'
const Home = () =>{
    return(
        <div className="home">   
            <HomeNav/>
            <div className="listContainer">
            <Carousel/>

            </div>
        </div>
    )
}

export default Home