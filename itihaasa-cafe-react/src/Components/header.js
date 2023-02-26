import React from 'react'
import logo from './IMG_9902.png';
import './header.css';

export default function header(){
    return(
        <header>
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <p><a href='home'>Home</a></p>
                <p><a href='home'>Menu</a></p>
                <p><a href='home'>About</a></p>
                <p><a href='home'>Location</a></p>
                <p><a href='home'>Contact</a></p>
                
            </ul>
        </div>
        <></>
        <div id="home"></div>
        </header>
    );
}