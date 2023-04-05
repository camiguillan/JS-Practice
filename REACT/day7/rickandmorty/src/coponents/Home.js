import React from 'react';
import { Route, Routes, Link  } from "react-router-dom";
//import './Home.css';
import '../appstyles.scss';

function Home() {
  return (
    <div className='homeDiv'>
          <h1 className='homeH1'>  RICK AND MORTY </h1>  
          <p className='homeP' > Click to see all Rick and Morty's Characters  
          <Link  className='homeLink' to="/characters" > View Characters </Link>    
          <Link  className='homeLink' to="/pagination" > pages </Link>   
          <br></br>
        
        </p>
       

    </div>
  )
}


export default Home;