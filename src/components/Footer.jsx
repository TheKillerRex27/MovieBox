import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

function Footer () {

    return (
        <footer>
            <span className="socials">
                <a><FontAwesomeIcon icon={ faSquareFacebook } /></a>
                <a><FontAwesomeIcon icon={ faInstagram } /></a>
                <a><FontAwesomeIcon icon={ faTwitter } /></a>
                <a><FontAwesomeIcon icon={ faYoutube } /></a>
            </span>
            <span className="links">
                <a>Conditions of Use</a>
                <a>Privacy & Policy</a>
                <a>Press Room</a>
            </span>
            <p className="bottom-text">© 2023 MovieBox by Alex Nwafor</p>
        </footer>
    )
}

export default Footer;