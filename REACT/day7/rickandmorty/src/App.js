import React from 'react';
import './App.css';
import { Route, Routes, Link  } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";  

import Profile from './profile';
import CharacterCards from './characterCards';
import Home from './Home';


/* character = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
} */

function App() {


  return (
    <>     
      <Routes>
      <Route path="/" element= {<Home />} />
      <Route path='/characters' element= {<CharacterCards />} />
      <Route path="/profile" element={<Profile />} /> 
    </Routes>
   
    
    </>
 
  );
}

export default App;
