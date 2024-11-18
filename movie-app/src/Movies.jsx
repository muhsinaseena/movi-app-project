import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { imageUrl } from './Url';
import { Link } from 'react-router-dom';
import { movie_context } from './App';
import './movies.css'



const Movies = ({ api, title }) => {
  const [movies, setmovies] = useState([])
  const { Movie, setMovie, id, setid } = useContext(movie_context);

  const getmovie_id = (test) => {
    setid(test);
  }
console.log(id);

  useEffect(() => {
    axios
      .get(api, title)
      .then((response) => setmovies(response.data.results));
  }, [api, title])

  useEffect(() => {
    setMovie(movies)
  }, [movies, setMovie])
  console.log(Movie);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div className='row' style={{ marginLeft: "90px" }}>
        <h2 style={{ color: "brown", padding: "30px", marginLeft: "510px" }}>{title}</h2>
        {movies.map((item) => {
          return (


            <Card style={{ width: "300px", textAlign: 'center', border: "2px solid grey", margin: "10px", backgroundColor: "black" }} onClick={() => getmovie_id(item.id)} 
            className='card'>
              <Link style={{ textDecoration: "none" }} to={"/moviedetails"}>
                <Card.Img variant="top" src={imageUrl + item.poster_path} style={{ height: "250px", width: "280px" }} />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title >{item.title}{item.name}</Card.Title>
                  <Card.Text>
                    Popularity-{item.popularity} <br />
                    Origin country-{item.origin_country}
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          )
        })}
      </div>


    </div>
  )
}

export default Movies