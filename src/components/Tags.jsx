import React from 'react';
import '../assets/styles/Tags.css'
const Tag = (props) =>{
    const { tagName, color} = props
    return(
        <div className="tagContainer" style={{
            backgroundColor:`#${color}`,
        }} >
            <h3>{tagName}</h3>
        </div>
    )
}
export default Tag