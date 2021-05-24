import React from 'react';
import '../assets/styles/Songs.css'
const Songs = props =>{
    const {name, icon} = props
    return(
        <div className="songContainer">
            <img src={icon} alt="" />
            <h3>{name}</h3>
        </div>
    )
}

export default Songs