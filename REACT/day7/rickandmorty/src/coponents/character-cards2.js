import React, { useContext } from 'react';
//import './App.css';
import '../styless/cards-style.scss';
import { useState, useRef } from 'react';
import { useEffect, createContext } from 'react';
import axios from 'axios';
import Characters from './characters';
import { useNavigate, useParams } from "react-router-dom";
import { Oval } from  'react-loader-spinner';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { appContext } from '../App';



export const charsContextCards2 = createContext();


function CharacterCards2(props) {
   //creating the list where all the characters will be saved
   const [characters, setCharacters] = useState([]);
   const [pageInfo, setPageInfo] = useState({});
   const navigate = useNavigate();
   const [isLoading, setIsLoading]  = useState(true);
   var firstPage = useContext(appContext);
   var pageNum = (props.value);
   var pageNumRef = useRef(pageNum);
  const [filterCode, setFilterCode] = useState(0);

  var filter = props.filterCode;
  //console.log(props.pageinfo.pages);

  //  useEffect(
  //   () => {
  //     setCharacters(firstPage[0]);
  //     setIsLoading(false);
  //   }, [firstPage]
  //  );
     
   //useEffect to fetch api data only one time when it is rendered, passing []

   useEffect( ()=> {
    setNumPages();
  },[props.pageInfo,filterCode]);

   useEffect(() => {
    //const numPages = props.pageinfo.pages;
    if(pageNum  ){
      if(pageNum == 1  ){
        setCharacters(firstPage[0]);
        //setFilterCode(props.pageinfo.pages);

        setIsLoading(false);
      }
      else if (parseInt(pageNum) !== pageNumRef.current){
        //console.log("pageNUm:",pageNum, "PageNUmRef:",pageNumRef.current);
        firstPage = undefined;
        pageNumRef.current = pageNum;
        setIsLoading(true);
        setNumPages(); 
        //const url = "https://rickandmortyapi.com/api/character?page=" + pageNum;
       
        //getChars(url);
   
     
      }
    }

  }, [pageNum, filterCode]);






  async function setNumPages(){
    var url;
    switch(filter){
      case "All": {
                   url = "https://rickandmortyapi.com/api/character?page=" + pageNum;
                   getChars(url);
                  // setFilterCode(props.pageInfo.pages);
                  }
        break;
      case "Rick": { 
                    
                    url = 'https://rickandmortyapi.com/api/character/?page='+ pageNum + '&name=rick';
                    await getChars(url);
                    //setFilterCode(pageInfo.pages);
                  }
        break;

      case "Morty": {  url = 'https://rickandmortyapi.com/api/character/?page='+ pageNum + '&name=morty';
                      await getChars(url);
                      //setFilterCode(pageInfo.pages);
                    }
        break;       
    }
   //console.log(filterCode);

  }


 
   async function getChars(url){
    await axios
         .get(url)
         .then(response => {
           const getChars = response.data.results;
           setPageInfo(response.data.info);
           //console.log(pageInfo);
           setCharacters(getChars);
           setFilterCode(pageInfo.pages);
           setIsLoading(false);
         })
         .catch(error => console.log(error));  
 
   }
 
 
   function showFilteredChars(event){
     var url;
     switch(event.target.value){
       
       case 'All': {  
                      url = "https://rickandmortyapi.com/api/character?page=" + pageNum;
                      getChars(url);}
         break;
       

         case 'Rick':{ pageNum = "1";
                       
                      url = 'https://rickandmortyapi.com/api/character/?page='+ pageNum + '&name=rick';
                      getChars(url);
                    
                    }
         break;
 
         case 'Morty' : {  pageNum = "1";
                          
                          url = 'https://rickandmortyapi.com/api/character/?page='+ pageNum + '&name=morty'
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
      <button className='nav-buttons'  onClick={() => navigate("/")} > 
        {/* <Link to="/" > Go Home </Link> </button> */}
        Go Home </button>
          {/*     
          <button  onClick={previous} >Previous</button>
          <button onClick={next} >Next</button> */}

          <select className='select-filter' onChange={showFilteredChars } >
            <option key= '3' >  All </option>
            <option key= '1' >  Rick </option>
            <option key= '2' >  Morty </option>
            
          </select>

          <Stack spacing={4}>
              
              <Pagination className='pagination' count={filterCode} 
                variant="outlined" shape="rounded"
                onChange={props.handlepageChange}
                page={
                  pageNum?
                    parseInt(pageNum)
                  : 0}
                />

            </Stack>



          
        </nav>
        

      </header>

      <charsContextCards2.Provider value={characters} >
      <div className="App">
      {/* <Characters char={characters}></Characters> */}
      <Characters value= {"chars2" } ></Characters>
      </div> 
      </charsContextCards2.Provider>



      </>
      } 
     
     </>
  
   );
 }



export default CharacterCards2;
