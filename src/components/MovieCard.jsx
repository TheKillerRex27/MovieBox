import React from "react";
import imdb from "../assets/imdb.png"
import tomatoes from "../assets/tomatoes.png"
import '../styles/MovieCard.css'

function MovieCard (props) {

    return (
        <div className="movie-card" data-testid="movie-card">
            <img src={props.poster} className="movie-poster" data-testid="movie-poster"/>
            <p className="movie-release-date" data-testid="movie-release-date">{props.releaseDate}</p>
            <p className="card-title" data-testid="movie-title">{props.title}</p>
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