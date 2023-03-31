import React from 'react';
import { Route, Routes, Link  } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className='homeDiv'>
          <h1 className='homeH1'>  RICK AND MORTY </h1>  
          <p className='homeP' > Click to see all Rick and Morty's Characters  
          <Link  className='homeLink' to="/characters" > View Characters </Link>    
          <br></br>
        
        </p>
       

    </div>
  )
}


export default Home;