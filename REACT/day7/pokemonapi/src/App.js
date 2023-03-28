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
  const [prevInfo, setprevInfo] = useState(null);
  const [nextInfo, setnextInfo] = useState(null);

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
          console.log(getChars);
          setCharacters(getChars)
          console.log(characters);
          setPageInfo(response.data.info);
          setnextInfo(pageInfo.next);
          console.log(pageInfo.next)
        })
        .catch(error => console.log(error));  

  }

  function next(){
    setnextInfo(pageInfo.next);
    setprevInfo(pageInfo.prev);
    getChars(nextInfo);

  }

  function previous(){
    setprevInfo(pageInfo.prev);

    getChars(prevInfo);

}

  return (
    <>

      <header className="header">  RICK AND MORTY  
      <nav>
           {  prevInfo  ? (<button onClick={previous} >Previous</button>)  : null }
           { nextInfo ? (<button onClick={next} >Next</button>)  : null }
        </nav>
      
      
      </header>
       <div className="App">
        <Characters char={characters}></Characters>

    

      </div>  
    
    
    </>
 
  );
}

export default App;
