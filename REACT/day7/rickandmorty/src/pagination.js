import React from 'react';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import CharacterCards2 from './coponents/characterCards2';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams } from "react-router-dom";

export default function Pages() {
  const [pageInfo, setPageInfo] = useState({});
  const [currentpage, setCurrentP] = useState('');
  //charactrs per page: 20 -> info provided by api 
  const nav = useNavigate();

  useEffect(() => {
  
    // const url = "https://rickandmortyapi.com/api/character/?page =" + page.pageId ;
    const url = "https://rickandmortyapi.com/api/character";
    setCurrentP("/characters?pagenum=1" );
    getPageInfo(url);
      
  }, []);

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
    //setCurrenP(value);
    setCurrentP("/characters?pagenum=" + value );
    console.log(value);
    //nav('/characters/?page='+ value);
  }

  return (
    <div>
      
      <header>
      <p> Page: {currentpage} </p>  
    <Stack spacing={2}>
     
      <Pagination className='pagination' count={pageInfo.pages} variant="outlined" shape="rounded"
        onChange={handlepageChange} />
    </Stack>
    </header>
    {/* <CharacterCards2></CharacterCards2> */}
    </div>
  );
}



