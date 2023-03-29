import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Characters from './characters';


/* character = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
} */

function App() {
  //creating the list where all the characters will be saved
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  
  //useEffect to fetch api data only one time when it is rendered, passing []
  useEffect(() => {
    //getting all characters 
    const url = "https://rickandmortyapi.com/api/character";
    getChars(url);
      
  }, []);

  function getChars(url){
    axios
        .get(url)
        .then(response => {
          const getChars = response.data.results;
          // console.log(getChars);
          setPageInfo(response.data.info);
          // console.log(characters);
         
          setCharacters(getChars);
          // console.log(nextInfo);
          // console.log(pageInfo.next);
        })
        .catch(error => console.log(error));  

  }

  function next() {
    getChars(pageInfo.next);
  }
  

  function previous() {
    getChars(pageInfo.prev);
  }

  


  function showFilteredChars(event){
    var url;
    switch(event.target.value){
      
      case 'All': { url = "https://rickandmortyapi.com/api/character";
      getChars(url);}
        break;
      
        case 'Rick':{ url = 'https://rickandmortyapi.com/api/character/?name=rick';
                     getChars(url);}
        break;

        case 'Morty' : { url = 'https://rickandmortyapi.com/api/character/?name=morty';
        getChars(url);}

        break;


    }

  }

  return (
    <>

      <header className="header">  
      <h1>  RICK AND MORTY </h1>  
      <nav>
          <button  onClick={previous} >Previous</button>
          <button onClick={next} >Next</button>
          <select className='select' onChange={showFilteredChars} >
          <option key= '3' >  All </option>
            <option key= '1' >  Rick </option>
            <option key= '2' >  Morty </option>
            
          </select>
        </nav>
      </header>

       <div className="App">
        <Characters char={characters}></Characters>
      </div>  
    
    
    </>
 
  );
}

export default App;
