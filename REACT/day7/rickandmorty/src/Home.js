import React from 'react';
import { Route, Routes, Link  } from "react-router-dom";

function Home() {
  return (
    <div>
          <h1>  RICK AND MORTY </h1>  
          <p> Click to see all Rick and Morty's characters</p>
        <Link to="/characters" > View Characters </Link>

    </div>
  )
}


export default Home;