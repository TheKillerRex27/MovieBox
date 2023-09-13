import React from 'react';
import MovieCard from './MovieCard';
import '../styles/TopMovies.css'

function TopMovies () {

    return (
        <section className='top-movies'>
            <span className='title'>
                <p>Featured Movies</p>
                <a>See More &gt;</a>
            </span>
            <div className='movie-list'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </section>
    )
}

export default TopMovies;