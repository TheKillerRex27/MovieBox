import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import SearchedMovies from './components/SearchedMovies.jsx'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/search' element={ <SearchedMovies /> }/>
      </Routes>
    </>
  )

}

export default App
