import React from "react";
import play from "../assets/play.svg"
import imdb from "../assets/imdb.png"
import tomatoes from "../assets/tomatoes.png"
import '../styles/DescriptionBox.css'

function DescriptionBox () {

    return (
        <div className="description-box">
            <p className="movie-title">John Wick 3 : <br/> Parabellum</p>
            <span className="ratings-line">
                <span className="rating">
                    <img src={imdb} className="imbd-logo" />
                    <p>86.0 / 100</p>
                </span>
                <span className="rating">
                    <img src={tomatoes} className="rotten-tomatoes-logo" />
                    <p>97%</p>
                </span>
            </span>
            <p className="description-text">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <button className="watch-btn">
                <img src={play} />
                WATCH TRAILER
            </button>
        </div>
    )
}

export default DescriptionBox