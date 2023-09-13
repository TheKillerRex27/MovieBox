import React from "react";
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/Navbar.css'

function Navbar () {
    
    return (
        <nav className="navbar">
            <span className="logo">
                <img src={logo} />
                MovieBox
            </span>
            <form className="search-bar">
                <input type="text" placeholder="What do you want to watch?"/>
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <span className="menu">
                <a className="sign-in" href="#">Sign in</a>
                <span className="menu-icon">
                    <img src={menu} />
                </span>
            </span>
        </nav>
    )
}

export default Navbar