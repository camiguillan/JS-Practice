import React from 'react';
import { Route, Routes, Link , useNavigate } from "react-router-dom";
//import './Home.css';
import { useState, createContext } from 'react';
import '../styless/home-style.scss';
import { useEffect } from 'react';
import axios from 'axios';
import Characters from './characters';
import { useParams } from "react-router-dom";
import { Oval } from  'react-loader-spinner';


export const charsContextHome = createContext();

function Home() {
  const nav = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isLoading, setIsLoading]  = useState(true);

  //path='/characters/?page=:pageId
  const page = useParams();


  
  //useEffect to fetch api data only one time when it is rendered, passing []
  useEffect( () => {
    //getting all characters 
    const url = "https://rickandmortyapi.com/api/character/1,2,3";
    fetchData(url);

  }, []);

  useEffect( () => {
    setIsLoading(false);

  }, [characters]);


  async function fetchData(url){
    const chars = await getChars(url);
    setCharacters(chars);
   
  }


  async function getChars(url){
    var chars;
   await axios
        .get(url)
        .then(response => {
          chars = response.data;
          setPageInfo(response.data.info);
                  })
        .catch(error => console.log(error));  

        return chars;

  }


  return (
    <>

    {
    
    isLoading?
      <div className='ovaldiv'>
      <Oval></Oval>  
      </div>

      :

      
    <div>

      <charsContextHome.Provider value={characters}>
      <div className='homeDiv'>
        <h1 className='homeH1'>  RICK AND MORTY </h1> 
        {/* <Characters char={characters}  ></Characters> */}
        <Characters  ></Characters>
      </div>
      </charsContextHome.Provider>
        

      

        <div  className='homeDiv' >
       
        <p className='homeP' > 
        <br></br>
        Click to see all Rick and Morty's Characters
        <button className='homeLink' onClick={()=>  nav("/characters") }>  View More Characters </button>
        </p>
         
      
        
        <Link  className='homeLink' to="/pagination?pageId=1" > pages </Link> 
      </div>

    </div>

    }


    </>
 
  )
}


export default Home;