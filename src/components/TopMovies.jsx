import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import '../styles/TopMovies.css'

function TopMovies () {

    const navigate = useNavigate()

    const API_KEY = '1939e08fcfc1b966f48087ee877ba03b';
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    const genreURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

    const [ moviesArr, setMoviesArr] = useState([])
    const [ genreList, setGenreList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            
            const result = await fetch(URL)
            result.json().then(data => {
                setMoviesArr(data.results.slice(0, 10));
            }).catch(err => {
                navigate('/server-error');
            })

            const genreResult = await fetch(genreURL)
            genreResult.json().then(data => {
                setGenreList(data.genres)
            }).catch(err => {
                navigate('/server-error');
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
        <section className='top-movies'>
            <span className='title'>
                <p>Featured Movies</p>
                <a>See More &gt;</a>
            </span>
            <div className='movie-list'>
                {moviesArr.map( movie => (
                    <MovieCard 
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
                        releaseDate={movie.release_date}
                        rating={movie.vote_average}
                        genres={getGenres(movie)}
                    />
                ))}
            </div>
        </section>
    )
}

export default TopMovies;