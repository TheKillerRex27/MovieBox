import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import logo from '../assets/logo.png';
import play from '../assets/play.png';
import loadingGif from '../assets/Spinner-1s-200px.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm ,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../styles/MovieDetails.css";

function MovieDetails() {

    const { id } = useParams();

    const API_KEY = '1939e08fcfc1b966f48087ee877ba03b';

    const [ isLoading, setIsLoading ] = useState(true)
    const [ movieObj, setMovieObj ] = useState({})

    useEffect(() => {
        const findMovieURL = `https://api.themoviedb.org/3/movie/${ id }?api_key=${API_KEY}`
        const fetchData = async () => {
            setIsLoading(true);
            const result = await fetch(findMovieURL)
            result.json().then(data => {
                setMovieObj(data);

                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            }).catch(err => {
                navigate('/server-error');
            })
        }
        fetchData();
    }, []);

    return (
        <div className="movie-details">
            <aside className="sidebar">
            <span className="sidebar-logo">
                        <img src={logo} />
                        MovieBox
                    </span>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <p className="sidebar-link" ><FontAwesomeIcon icon={faHome} className="icon" /> Home</p>
                </Link>
                <p className="sidebar-link-active">
                    <FontAwesomeIcon icon={faFilm} className="icon" />  Movies
                </p>
                <p className="logout">
                    <FontAwesomeIcon icon={faRightFromBracket} className="icon" />  Log out
                </p>
            </aside>
            <div className="movie-text">
                {isLoading ? (
                    <img src={loadingGif} className="loading-gif" />
                ) : (<>
                        <div className="fake-thumbnail">
                            <img src={play} />
                            <p>Watch Trailer</p>
                        </div>
                        <span>
                            <p className="title" data-testid="movie-title">{movieObj.title}</p>
                            <p>|</p>
                            <p className="release-date" data-testid="movie-release-date">{movieObj.release_date}</p>
                            <p>|</p>
                            <p className="runtime" data-testid="movie-runtime">{movieObj.runtime}</p>
                        </span>
                        <div className="movie-description">
                            <p data-testid="movie-overview">{movieObj.overview}</p>
                            <div className="movie-tags">
                                <span className="label">Vote Count :</span>
                                <p className="label-text">{movieObj.vote_count}</p>
                                <span className="label">Vote Average :</span>
                                <p className="label-text">{movieObj.vote_average}</p>
                                <span className="label">Status :</span>
                                <p className="label-text">{movieObj.status}</p>
                            </div>
                        </div>
                    </>
                    )}
            </div>
        </div>
    )
}

export default MovieDetails;