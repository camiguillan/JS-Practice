import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import CharacterCards2 from './coponents/character-cards2';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PaginationItem from '@mui/material/PaginationItem';
import { appContext } from './App';



export default function Pages() {
  const [pageInfo, setPageInfo] = useState({});
  const [currentpage, setCurrentP] = useState();
  //charactrs per page: 20 -> info provided by api 
  const nav = useNavigate();
  const [searchp] = useSearchParams();
  //console.log(searchp.get('pageId'));
  const info = useContext(appContext);
  var pageNum = searchp.get('pageId');
  var filterChar = searchp.get("name"); 
  const [currentName, setName] = useState();
  

  useEffect(() => {
    setCurrentP( pageNum );
    setName(filterChar);
     }, [currentpage, currentName]);

  
  useEffect(() => {
    setPageInfo(info[1]);      
  }, [pageInfo]);



  function handlepageChange(event,value){
    setCurrentP(value);
    //nav("/pagination?pageId=" + value)
    nav("/pagination?pageId=" + value + "&name=" + filterChar);
    //console.log(value);
  }

  function nameSelected(event){
    var url;
    setName(event.target.value);
    setCurrentP(1);
    switch(event.target.value){
      
      case 'All': {   nav("/pagination?pageId=" + currentpage + "&name=All" );
                      //url = "https://rickandmortyapi.com/api/character?page=" + pageNum;
                      
                     }
        break;
      

        case 'Rick':{ 
                      nav("/pagination?pageId=" + currentpage + "&name=" + "Rick");
                      //url = 'https://rickandmortyapi.com/api/character/?page='+ pageNum + '&name=rick';
               
                   
                   }
        break;

        case 'Morty' : { 
                           nav("/pagination?pageId=" + currentpage + "&name=Morty" );
                           //url = 'https://rickandmortyapi.com/api/character/?page='+ pageNum + '&name=morty'
                    

        break;
        }

  }
}

  return (
    <div>

      <header>
      <h1>  RICK AND MORTY </h1> 
      
      <select className='select-filter' onChange={nameSelected} >
            <option key= '3' >  All </option>
            <option key= '1' >  Rick </option>
            <option key= '2' >  Morty </option>
            
          </select>

      </header>
      
  
    {/*    
    <CharacterCards2 value={currentpage} ></CharacterCards2> */}
    <CharacterCards2 pageInfo={pageInfo} 
        handlepageChange={handlepageChange} value={currentpage}  filterCode = {currentName}  />
    
    </div>
    
  
  );
}

