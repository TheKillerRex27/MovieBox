import React from "react";
import poster from '../assets/stranger-things.png'
import imdb from "../assets/imdb.png"
import tomatoes from "../assets/tomatoes.png"
import '../styles/MovieCard.css'

function MovieCard () {
    
    return (
        <div className="movie-card">
            <img src={poster} className="movie-poster"/>
            <p className="movie-release-date">USA, 2016 - Current</p>
            <p className="card-title">Stranger Things</p>
            <span className="movie-ratings">
                <span className="rating">
                    <img src={imdb} className="imbd-logo" />
                    <p>86.0 / 100</p>
                </span>
                <span className="rating">
                    <img src={tomatoes} className="rotten-tomatoes-logo" />
                    <p>97%</p>
                </span>
            </span>
            <span className="genre">
                <p>Action,</p>
                <p>Adventure,</p>
                <p>Horror</p>
            </span>
        </div>
    )
}

export default MovieCard;