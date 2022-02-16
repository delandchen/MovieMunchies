import SearchBar from './component/Search';
import React, { useEffect } from 'react';
import MovieComponent from './component/Movie';
import RecipeComponent from './component/Recipe';
import { FetchMovies, FetchMovie, FetchPopular } from './api/movie';
import RecipeApi from './api/recipe';
import Navigation from './component/Navigation';
import Modal from './component/Modal';
import Backdrop from './component/Backdrop';
import classes from './app.module.css';

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

function App() {

  const [appState, setAppState] = useState('Movie');  // Updates when changing api/components
  const [searchValue, setSearchValue] = useState(''); // Search value 
  const [movie, setMovieObject] = useState([]);  // Movie Object returned from API call
  const [recipe, setRecipeObject] = useState([]); // Recipe Object from API call
  const [modal, setModalIsActive] = useState(false); 
  const [modalObject, setModalObject] = useState([]);  // Movie object from API call


  // Fetches popular movies
  useEffect(async () => {
    const res = await FetchPopular()
    setMovieObject(res)
  }, []);


  // Submits searchValue to API
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (searchValue === '') { return; }

    else if (appState === 'Movie') { setMovieObject([]); 
      const res = await FetchMovies(searchValue); setMovieObject(res); }

    else if (appState === 'Snack') { setRecipeObject([]); 
      const res = await RecipeApi(searchValue); setRecipeObject(res); }

  }

  // Updates search input value
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  // Set to render movies
  const setAppStateMovie = async () => {
    setAppState('Movie');
  }

  // Set to render recipes
  const setAppStateRecipe = async () => {
    setAppState('Snack');
  }

  const closeModal = () => {
    setModalIsActive(false);
  }

  // Renders the selected movie details
  const openModal = async (event) => {
    const res = await FetchMovie(event.currentTarget.id)
    setModalObject(res);
    setModalIsActive(true);
  }

  return (
    <div className={classes.app}>
      <Navigation recipeState={setAppStateRecipe} movieState={setAppStateMovie} />
      <SearchBar
        handleSubmit={handleSubmit}
        handleSearch={handleSearchValue}
        searchState={appState}
        searchValue={searchValue}
      />

      {modal ? <Modal movie={modalObject} /> : null}
      {modal ? <Backdrop closeModal={closeModal} /> : null}

      <Routes>
        <Route path='/' element={<MovieComponent movie={movie} openModal={openModal} />} />
        <Route exact path='/recipe' element={<RecipeComponent recipe={recipe} />} />
      </Routes>

    </div >
  );
}

export default App;
