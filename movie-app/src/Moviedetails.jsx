import React, { useEffect } from 'react'
import { useContext } from 'react'
import { App, movie_context } from './App'
import { imageUrl } from './Url'




export const Moviedetails = () => {
  const { Movie, id, show, setshow } = useContext(movie_context);
  const selectedMovie = Movie.filter((movieitem) => movieitem.id === id);
  console.log(selectedMovie);

  useEffect(() => {
    setshow(false)

  }, [])
  console.log(Movie);
  console.log(id);

  return (
    <div 
    style={{
      backgroundImage: `url(${imageUrl + selectedMovie[0].poster_path})`,
      backgroundPosition:`center`,
      backgroundSize:"100% 100%",
      height: '100vh',
      padding: '30px',
      color: 'white',
      textAlign: 'center',
      paddingTop:'80px'
    }} >
      
        <h2>{selectedMovie[0].title}{selectedMovie[0].name}</h2>
        <p>Release Date-{selectedMovie[0].release_date}{selectedMovie[0].first_air_date}</p>
        <p>Language-{selectedMovie[0].original_language}</p>
        <p>Overview-{selectedMovie[0].overview}</p>
      </div>

    
  );
};



