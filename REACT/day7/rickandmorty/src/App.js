import React from 'react';
//import './App.css';
import './styless/app-styles.scss';
import { Route, Routes, Link, Navigate} from "react-router-dom";
import Pages from './pagination';
import Profile from './coponents/profile';
import CharacterCards from './coponents/character-cards';
import Home from './coponents/home';
import Episodes from './coponents/episodes';
import CharacterCards2 from './coponents/character-cards2';
import { QueryClient, QueryClientProvider } from "react-query";


/* character = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
} */

function App() {
  const queryclient = new QueryClient();


// path='/characters/?page=:pageId
  return (

    <> 
    <QueryClientProvider client={queryclient} > 
      <Routes>
     
     
      <Route path='/characters' element= {<CharacterCards />} >
        
      </Route>

      {/* <Route path='/characters?pagenum=:pageId' element= {<CharacterCards2 />} /> */}
      <Route path="/characters/:id" element={<Profile />} />       
       <Route path="/characters/:id/episodes" element={<Episodes />} />  

       <Route path="/" element= {<Home />} /> 
       <Route path="/pagination" element= {<Pages />} /> 
       <Route path='*' element={ <Navigate to="/" /> }/>
    </Routes>
    </QueryClientProvider>   
   
    
    </>
 
  );
}

export default App;
