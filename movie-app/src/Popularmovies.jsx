import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { imageUrl, popularMovies } from './Url';


const Popularmovies = () => {
    const [movies, setmovies] = useState([])
    useEffect(() => {
      axios
        .get(popularMovies)
        .then((response)=> setmovies(response.data.results)
        );
        
    }, [])
  console.log(movies);
  
  return (
    <div>
       <div className='row' style={{marginLeft:"80px"}}>
        <h2>Popular Movies</h2>
        {movies.map((item)=>{
            return(

 <Card style={{ width:"300px",textAlign:'center',border:"2px solid black",margin:"10px"}}>
      <Card.Img variant="top" src={imageUrl+item.poster_path} style={{height:"250px"}}/>
      <Card.Body>
        <Card.Title style={{color:"green"}}>{item.title}</Card.Title>
        <Card.Text>
        Popularity-{item.popularity} <br />
        Release date-{item.release_date}
        </Card.Text>
        <Button variant="primary">click here</Button>
      </Card.Body>
    </Card>
     )
    })}
    </div>

    </div>
  )
}

export default Popularmovies