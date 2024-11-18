import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { imageUrl, popularMovies } from './Url';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    axios
      .get(popularMovies)
      .then((response) => {
        setMovies(response.data.results);
        const moviesArray = response.data.results;
        setMovies(moviesArray);
        const randomIndex = Math.floor(Math.random() * moviesArray.length);
        setRandomMovie(moviesArray[randomIndex]);
      })
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl + randomMovie?.poster_path})`,
        backgroundPosition:`center`,
        backgroundSize:"100% 100%",
        height: '100vh',
        padding: '20px',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h2>Name: {randomMovie?.title}</h2>
      <h2>Popularity: {randomMovie?.popularity}</h2>
      <h2>Origin country: {randomMovie?.origin_country}</h2>
    </div>
  );
};

export default Banner;