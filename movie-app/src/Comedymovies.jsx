import React, { useEffect, useState } from 'react';
import axios from "axios";
import { comedyMovies, imageUrl } from './Url';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





const Comedymovies = () => {

    const [movies, setmovies] = useState([])
    useEffect(() => {
        axios
        .get(comedyMovies)
        .then((response)=> setmovies(response.data.results));
        
    }, [])
    console.log(movies);
    
  return (
    <div className='row' style={{marginLeft:"80px"}}>
      <h2>Comedy Movies</h2>
        {movies.map((item)=>{
            return(

           
 <Card style={{ width:"300px",textAlign:'center',border:"2px solid black",margin:"10px"}}>
      <Card.Img variant="top" src={imageUrl+item.poster_path}style={{height:"250px"}} />
      <Card.Body>
        <Card.Title style={{color:"darkblue"}}>{item.name}</Card.Title>
        <Card.Text>
        Popularity-{item.popularity} <br />
       Origin country-{item.origin_country}
        </Card.Text>
        <Button variant="primary">click here</Button>
      </Card.Body>
    </Card>
     )
    })}
    </div>
  )
}

export default Comedymovies