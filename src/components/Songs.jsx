import React from 'react';
import '../assets/styles/Songs.css'
const Songs = props =>{
    const {name} = props
    var icon = 'https://cdn.icon-icons.com/icons2/2226/PNG/512/play_icon_134504.png'
    return(
        <div className="songContainer">
            <img src={icon} alt="" />
            <h3>{name}</h3>
        </div>
    )
}

export default Songs