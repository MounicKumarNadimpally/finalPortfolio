import React from "react";
import Headroom from "react-headroom";
import './header.css'

const Header = ()=>{
    return (
        <Headroom>
        <div className="header">
            <p>
            <a className="logoContainer" href='/'>
            <span className="grey-color">{"<"}</span>
            <span className="logoName">Mounic Kumar</span>
            <span className="grey-color">{"/>"}</span>
            </a></p>
            <ul className="menu-list">
                <li><a href='#Skills'>Skills</a></li>
                <li><a href='Work Experience'>Work Experiences</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </div>
        </Headroom>
    )
}

export default Header