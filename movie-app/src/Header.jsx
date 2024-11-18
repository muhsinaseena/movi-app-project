import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";
import './movies.css'


const Header = () => {

  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:"30px"}}>   Movie <BiSolidCameraMovie style={{color:"brown"}} /><br /> World</Navbar.Brand>
          <Nav className="ms-auto fs-3 ">
            <Nav.Link href="#home" ><Link  style={{textDecoration:"none",color:"white"}} to={"/popularmovies"} className='nav-link'> Popular movies</Link> </Nav.Link>
            <Nav.Link href="#features" ><Link  style={{textDecoration:"none",color:"white"}} to={"/latestmovies"}  className='nav-link'> Latest movies</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link  style={{textDecoration:"none",color:"white"}} to={"/comedymovies"}  className='nav-link'> Comedy movies</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header