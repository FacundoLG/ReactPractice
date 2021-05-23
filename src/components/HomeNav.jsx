import React from 'react';
import Tags from './Tags';
import '../assets/styles/HomeNav.css'

const HomeNav = (props) =>{
    return(
        <div className="navContainer">
            <Tags tagName="Top10" color="d65a31"/>            
            <Tags tagName="English"color="52057b"/>            
            <Tags tagName="French"color="84142d"/>            
            <Tags tagName="Spanish"color="01024e"/>            
            <Tags tagName="ByAlbums"color="3e432e"/>            
        </div>
    )
}

export default HomeNav