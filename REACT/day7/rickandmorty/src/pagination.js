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
     
    <Stack spacing={2}>
     
      <Pagination className='pagination' count={pageInfo.pages} 
        variant="outlined" shape="rounded"
        onChange={handlepageChange}
        page={
          currentpage?
            parseInt(currentpage)
          : 0}
        />

    </Stack>
    </header>

    <div>
    <p> Page: {currentpage} </p> 
    <CharacterCards2 value={currentpage} ></CharacterCards2>

    </div>
    
    </div>
  );
}



