import React from 'react';
import Songs from './Songs'
import '../assets/styles/Carousel.css'

const Carousel = props =>{
    const {id,name} = props
    var expanded = false
    const expand =() => {
        if(!expanded){
            document.getElementById(`${id}`).style.minWidth = '70%'
            document.getElementById(`${id}a`).style.maxHeight = '400px' 
            expanded = !expanded
        }
        else{
            document.getElementById(`${id}`).style.minWidth = '300px'
            document.getElementById(`${id}`).style.maxWidth = '400px'
            document.getElementById(`${id}a`).style.maxHeight = '250px' 
            expanded = !expanded
        }
    }
    return(
        <div className="playListContainer" id={id}>
            <div className="carouselContainer" id={id + "a"}>
                <div className="titleContainer">
                    <h2>{name}</h2>
                    <button onClick={expand}>+</button>
                </div>
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