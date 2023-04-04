import React from 'react';
import './App.css';
import { Route, Routes, Link, Navigate} from "react-router-dom";
import { BrowserRouter, Redirect } from "react-router-dom";  

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
     
   
      <Route path='/characters' element= {<CharacterCards />} >
     
      </Route>
      <Route path="/characters/:id" element={<Profile />} />       
       <Route path="/characters/:id/episodes" element={<Episodes />} />  

       <Route path="/" element= {<Home />} /> 
       <Route path='*' element={ <Navigate to="/" /> }/>
    </Routes>
   
    
    </>
 
  );
}

export default App;
