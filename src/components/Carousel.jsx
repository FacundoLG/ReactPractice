import React from 'react';
import Songs from './Songs'
import '../assets/styles/Carousel.css'

const Carousel = props =>{
    return(
        <div className="playListContainer">
        <div className="carouselContainer">
            <h2>Top 10</h2>
            <div className="carousel">
                <Songs/>
                <Songs/>
                <Songs/>
                <Songs/>
                <Songs/>
                <Songs/>
                <Songs/>
                <Songs/>
                <Songs/>
            </div>
        </div>
        <div className="mediaPlayer">
           
        </div>
        </div>
    )
}
export default Carousel