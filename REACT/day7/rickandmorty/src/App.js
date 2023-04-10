import React from 'react';
//import './App.css';
import './appstyles.scss';
import { Route, Routes, Link, Navigate} from "react-router-dom";
import Pages from './pagination';
import Profile from './coponents/profile';
import CharacterCards from './coponents/characterCards';
import Home from './coponents/Home';
import Episodes from './coponents/episodes';
import CharacterCards2 from './coponents/characterCards2';

/* character = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
} */

function App() {

// path='/characters/?page=:pageId
  return (
    <>     
      <Routes>
     
     
      <Route path='/characters' element= {<CharacterCards />} >
        
      </Route>

      <Route path='/characters?pagenum=:pageId' element= {<CharacterCards2 />} />
      <Route path="/characters/:id" element={<Profile />} />       
       <Route path="/characters/:id/episodes" element={<Episodes />} />  

       <Route path="/" element= {<Home />} /> 
       <Route path="/pagination" element= {<Pages />} /> 
       <Route path='*' element={ <Navigate to="/" /> }/>
    </Routes>
   
    
    </>
 
  );
}

export default App;
