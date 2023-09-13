import React from "react";
import poster from '../assets/stranger-things.png'
import imdb from "../assets/imdb.png"
import tomatoes from "../assets/tomatoes.png"
import '../styles/MovieCard.css'

function MovieCard (props) {

    return (
        <div className="movie-card">
            <img src={props.poster} className="movie-poster"/>
            <p className="movie-release-date">{props.releaseDate}</p>
            <p className="card-title">{props.title}</p>
            <span className="movie-ratings">
                <span className="rating">
                    <img src={imdb} className="imbd-logo" />
                    <p>{props.rating}</p>
                </span>
                <span className="rating">
                    <img src={tomatoes} className="rotten-tomatoes-logo" />
                    <p>{props.rating}</p>
                </span>
            </span>
            <span className="genre">
                {props.genres}
            </span>
        </div>
    )
}

export default MovieCard;