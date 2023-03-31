import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Characters from './characters';
import Profile from './profile';
import { Route, Routes, Link  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Oval } from  'react-loader-spinner';


function CharacterCards() {
   //creating the list where all the characters will be saved
   const [characters, setCharacters] = useState([]);
   const [pageInfo, setPageInfo] = useState({});
   const navigate = useNavigate();
   const [isLoading, setIsLoading]  = useState(true);

   
   //useEffect to fetch api data only one time when it is rendered, passing []
   useEffect(() => {
     //getting all characters 
     const url = "https://rickandmortyapi.com/api/character";
     getChars(url);
       
   }, []);
 
   async function getChars(url){
    await axios
         .get(url)
         .then(response => {
           const getChars = response.data.results;
           // console.log(getChars);
           setPageInfo(response.data.info);
           // console.log(characters);
          
           setCharacters(getChars);
           setIsLoading(false);
           // console.log(nextInfo);
           // console.log(pageInfo.next);
         })
         .catch(error => console.log(error));  
 
   }
 
   function next() {
      setIsLoading(true);
     getChars(pageInfo.next);
   }
   
 
   function previous() {
    setIsLoading(true);
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
 
      { isLoading? 
      
        <div className='ovaldiv'>
        <Oval></Oval>  
        </div>
        
        :
        <>
        <header className="header">  
      <h1>  RICK AND MORTY </h1>  
      <nav>
      <button onClick={() => navigate("/")} > 
        {/* <Link to="/" > Go Home </Link> </button> */}
        Go Home </button>
    
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
      } 
     
     </>
  
   );
 }



export default CharacterCards;
