import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import loadingGif from '../assets/Spinner-1s-200px.svg'
import Footer from "./Footer";
import notFound from "../assets/image-not-found.png"
import "../styles/SearchedMovies.css";

function SearchedMovies() {
    
    const [ isLoading, setIsLoading ] = useState(true)
    const [ searchResults, setSearchResults ] = useState([]);
    const [ genreList, setGenreList] = useState([]);

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const API_KEY = '1939e08fcfc1b966f48087ee877ba03b';
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;


    useEffect(() => {
        const fetchData = async () => {
            
            const result = await fetch(searchURL)
            result.json().then(data => {
                setSearchResults(data.results.slice(0, 10));
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000)
            }).catch(err => {
                navigate('/server-error');
            })

            const genreResult = await fetch(genreURL)
            genreResult.json().then(data => {
                setGenreList(data.genres)
            })
        }
        fetchData();
    }, []);

    function getGenres(movie) {
        let genre = [];
    
        movie.genre_ids.forEach((id) => {
            const genreObject = genreList.find((obj) => obj.id === id);
            if (genreObject) {
                genre.push(genreObject.name);
            }
        });
    
        return genre.join(', ');
    }

    return (
        <>
            <Navbar color={{ "background":"#15232E" }} />

            <section>
                <p className="results-title">Results ({searchResults.length})</p>
                {isLoading ? (
                    <div className="loading-container">
                        <img src={loadingGif} className="loading-gif" />
                    </div>
                ) : (<div className="search-results">
                    {searchResults.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            poster={movie.poster_path === null ? notFound : `https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            releaseDate={movie.release_date}
                            rating={movie.vote_average}
                            genres={getGenres(movie)}
                        />
                    ))}
                    </div>
                )}
            </section>
            <Footer />
        </>
    )
}

export default SearchedMovies;