import React from 'react';
import { Route, Routes, Link , useNavigate } from "react-router-dom";
//import './Home.css';
import { useState } from 'react';
import '../appstyles.scss';
import { useEffect } from 'react';
import axios from 'axios';
import Characters from './characters';
import { useParams } from "react-router-dom";
import { Oval } from  'react-loader-spinner';

function Home() {
  const nav = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const navigate = useNavigate();
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
   console.log(characters);
   setIsLoading(false);

  }, [characters]);


  async function fetchData(url){
    const chars = await getChars(url);
    setCharacters(chars);
    console.log(chars);
    console.log(characters);
  }


  async function getChars(url){
    var chars;
   await axios
        .get(url)
        .then(response => {
          chars = response.data;
          // console.log(getChars);
          setPageInfo(response.data.info);
          // console.log(characters);
          //setCharacters(chars);
         
        
          // console.log(nextInfo);
          // console.log(pageInfo.next);
         // console.log(characters);
          console.log(chars);

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

      
    <div className='homeDiv' >

      <div>
        <h1 className='homeH1'>  RICK AND MORTY </h1> 
         
        <Characters char={characters}  ></Characters>
        {/* <div>
          <p>ssssss</p>
          <p>ssssss</p>
          <p>ssssss</p>
          <p>ssssss</p>
        </div>
       </div> */}

      <div className='homeDiv'>
      <p className='homeP' > Click to see all Rick and Morty's Characters    </p>
        <button className='homeLink' onClick={()=>  nav("/characters") }>  View More Characters </button>
        <Link  className='homeLink' to="/pagination" > pages </Link> 
      </div>

    </div>

    }
    </>
 
  )
}


export default Home;