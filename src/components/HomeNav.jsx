import React from 'react';
import Tags from './Tags';
import '../assets/styles/HomeNav.css'

const HomeNav = (props) =>{
    return(
        <div className="navContainer">
            <Tags tagName="Top10" color="e5e5e5"/>            
            <Tags tagName="English"color="e5e5e5"/>            
            <Tags tagName="French"color="e5e5e5"/>            
            <Tags tagName="Spanish"color="e5e5e5"/>            
            <Tags tagName="ByAlbums"color="e5e5e5"/>            
        </div>
    )
}

export default HomeNav