import React from "react";
import { Link } from "react-router-dom";
import serverError from "../assets/server-error.jpg"
import "../styles/ServerError.css"

function ServerError() {

    return (
        <section className="server-error">
            <img src={ serverError } />
            <Link to={'/'} className="go-home-button">Go Home</Link>
        </section>
    )
}

export default ServerError;