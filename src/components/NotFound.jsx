import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/page-not-found.jpg"
import "../styles/NotFound.css"

function NotFound() {

    return (
        <section className="not-found">
            <img src={ notFound } />
            <Link to={'/'} className="go-home-button">Go Home</Link>
        </section>
    )
}

export default NotFound;