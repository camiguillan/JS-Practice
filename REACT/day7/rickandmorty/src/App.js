import React from 'react';
import './App.css';
import { Route, Routes, Link  } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";  

import Profile from './profile';
import CharacterCards from './characterCards';
import Home from './Home';
import Episodes from './episodes';


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
      <Route path='/characters' element= {<CharacterCards />} >
     
      </Route>
      <Route path="/characters/:id" element={<Profile />} /> 
      
      {/* <Route path="/characters/profile/episodes" element={<Episodes />} />  */}
    </Routes>
   
    
    </>
 
  );
}

export default App;
