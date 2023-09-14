import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import SearchedMovies from './components/SearchedMovies.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import NotFound from './components/NotFound.jsx';
import ServerError from './components/ServerError.jsx';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/search' element={ <SearchedMovies /> }/>
        <Route path='/movies/:id' element={ <MovieDetails /> }/>
        <Route path='*' element={ <NotFound /> }/>
        <Route path='/server-error' element={ <ServerError /> }/>
      </Routes>
    </>
  )

}

export default App
