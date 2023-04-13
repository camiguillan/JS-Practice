import React from 'react';
//import './App.css';
import '../styless/cards-style.scss';
import { useState } from 'react';
import { useEffect, createContext } from 'react';
import axios from 'axios';
import Characters from './characters';
import { useNavigate, useParams } from "react-router-dom";
import { Oval } from  'react-loader-spinner';
import Pages from '../pagination';



export const charsContextCards2 = createContext();


function CharacterCards2(props) {
   //creating the list where all the characters will be saved
   const [characters, setCharacters] = useState([]);
   const [pageInfo, setPageInfo] = useState({});
   const navigate = useNavigate();
   const [isLoading, setIsLoading]  = useState(true);
   const pageNum = (props.value);
     
   //useEffect to fetch api data only one time when it is rendered, passing []
   useEffect(() => {
      
     const url = "https://rickandmortyapi.com/api/character?page=" + pageNum ;
    //  console.log(url, pageNum);
     //const url = "https://rickandmortyapi.com/api/character";
     getChars(url);
       
   }, [pageNum]);
 
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
       
       case 'All': { url = "https://rickandmortyapi.com/api/character?page=" + pageNum;
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
          <select className='select-filter' onChange={showFilteredChars} >
          <option key= '3' >  All </option>
            <option key= '1' >  Rick </option>
            <option key= '2' >  Morty </option>
            
          </select>
        </nav>
        

      </header>

      <charsContextCards2.Provider value={characters} >
      <div className="App">
      {/* <Characters char={characters}></Characters> */}
      <Characters ></Characters>
      </div> 
      </charsContextCards2.Provider>



      </>
      } 
     
     </>
  
   );
 }



export default CharacterCards2;
