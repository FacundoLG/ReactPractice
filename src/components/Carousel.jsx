import React from 'react';
import Songs from './Songs'
import '../assets/styles/Carousel.css'

const Carousel = props =>{
    return(
        <div className="playListContainer">
        <div className="carouselContainer">
            <h2>Top 10</h2>
            <div className="carousel">
                <Songs name="Patatudoooooooo"/>
                <Songs name="Patatudoooooooo"/>
                <Songs name="Patatudoooooooo"/>
                <Songs name="Patatudoooooooo"/>
                <Songs name="Patatudoooooooo"/>
                <Songs name="Patatudoooooooo"/>
                <Songs name="Patatudoooooooo"/>
                <Songs name="Patatudoooooooo"/>
            </div>
        </div>
        <div className="mediaPlayer">
           
        </div>
        </div>
    )
}
export default Carousel