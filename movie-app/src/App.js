import React, { createContext, useState } from 'react';
import Header from './Header';
import Popularmovies from './Popularmovies';
import Latestmovies from './Latestmovies';
import Comedymovies from './Comedymovies';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from './Movies';
import { comedyMovies, latestMovies, popularMovies } from './Url';
import Banner from './Banner';
import { Moviedetails } from './Moviedetails';





const movie_context=createContext();

export const App = () => {
    const [Movie, setMovie] = useState([]);
    const [id,setid] =useState([]);
    const [show,setshow]=useState([true]);

    return (
        <div>
            <movie_context.Provider value={{Movie,setMovie,id,setid,show,setshow}}>
            <BrowserRouter>
                {show&&<Header />}
                {show&&<Banner/>}
              
                <Routes>
                 <Route path="/popularmovies" element={<Movies api={popularMovies} title={"Popular Movies"}/>} />
                 <Route path="/latestmovies" element={<Movies api={latestMovies} title={"Latest Movies"}/>}/>
                 <Route path="/comedymovies" element= {<Movies api={comedyMovies} title={"Comedy Movies"}/>}/>  
                 <Route path="/moviedetails" element={<Moviedetails/>}/> 
                </Routes>
            </BrowserRouter>
            </movie_context.Provider>
        </div>
    )
}
export {movie_context};
