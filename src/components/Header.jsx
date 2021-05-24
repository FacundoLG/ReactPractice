import '../assets/styles/Header.css'
import React from 'react';

const Header = (props) =>{
    const {brand } = props;
    return(
        <header className="header">
            <div className="brandContainer">
                <h2>{brand}</h2>
            </div>
            <div className="headerNav">
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li className="contact">Contact</li>
                </ul>
            </div>
        </header>
    )
}

export default Header