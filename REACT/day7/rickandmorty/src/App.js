import React from 'react';
//import './App.css';
import './appstyles.scss';
import { Route, Routes, Link, Navigate} from "react-router-dom";
import Pagination from './pagination';
import Profile from './coponents/profile';
import CharacterCards from './coponents/characterCards';
import Home from './coponents/Home';
import Episodes from './coponents/episodes';


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
       <Route path="/pagination" element= {<Pagination />} /> 
       <Route path='*' element={ <Navigate to="/" /> }/>
    </Routes>
   
    
    </>
 
  );
}

export default App;
