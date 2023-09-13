import React from "react";
import Navbar from "./Navbar"
import DescriptionBox from "./DescriptionBox";
import '../styles/Header.css'

function Header () {

    return (
        <header>
            <Navbar />
            <DescriptionBox />
        </header>
    )
}

export default Header