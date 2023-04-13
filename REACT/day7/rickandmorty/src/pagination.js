import React from 'react';
import { useState, useEffect, createContext } from 'react';
import CharacterCards2 from './coponents/character-cards2';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PaginationItem from '@mui/material/PaginationItem';



export default function Pages() {
  const [pageInfo, setPageInfo] = useState({});
  const [currentpage, setCurrentP] = useState();
  //charactrs per page: 20 -> info provided by api 
  const nav = useNavigate();
  const [searchp] = useSearchParams();
  //console.log(searchp.get('pageId'));
  const pageNum = searchp.get('pageId');
  

  useEffect(() => {
  
    // const url = "https://rickandmortyapi.com/api/character/?page =" + pageNum;
    const url = "https://rickandmortyapi.com/api/character";
    setCurrentP( pageNum );
    
    getPageInfo(url);

      
  }, [currentpage]);

  async function getPageInfo(url){
    await axios
    .get(url)
    .then(response => {
        setPageInfo(response.data.info);
      //setIsLoading(false);
    })
    .catch(error => console.log(error)); 

  }



  function handlepageChange(event,value){
    setCurrentP(value);
    nav("/pagination?pageId=" + value)
    //console.log(value);
  }

  return (
    <div>
      
      <header>
     
   
    </header>

    <div>
{/*    
    <CharacterCards2 value={currentpage} ></CharacterCards2> */}
    <CharacterCards2 pageInfo={pageInfo} 
        handlepageChange={handlepageChange} value={currentpage} />
    </div>
    
    </div>
  );
}



