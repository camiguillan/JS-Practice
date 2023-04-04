import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import './episodes.css';
import { Oval } from  'react-loader-spinner';


export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);  
  const [isloading, setisloading] = useState(true);
  const charId = useParams();
  const navigate = useNavigate();
  const [currentC, setCurrentC] = useState({
    id:'',
    name:'',
    status:'',
    species:'',
    type:'', 
    gender:'',
    image: '',
    location:{},
    origin:{},
    episode: []
});

useEffect(() => {
  const url = "https://rickandmortyapi.com/api/character/" + charId.id;
  getData(url);
  
}, []);

useEffect(() => {
  if (currentC !== undefined && currentC.episode !== undefined ) {
    fetchEpisodes();
  }
}, [currentC]);

// useEffect(() => {
//   if (currentC !== undefined && episodes !== undefined) {
//     setisloading(false);
//   }
// }, [episodes]);


  async function getData(url){
    await getChar(url);  
    // if (currentC != undefined && currentC.episode != undefined){
    //   await fetchEpisodes();
    // }

  };
  

  async function getChar(url){
    await  axios
         .get(url)
         .then( response  => {
           const getC =  response.data;           
           setCurrentC({
             id: getC.id,
             name:getC.name,
             status: getC.status  ,
             species:getC.species,
             type: getC.type , 
             gender:getC.gender,
             location:{
                 name:getC.location.name
             },
             origin:{
                 name: getC.origin.name
             }, 
             image: getC.image,
             episode: getC.episode
             
           });

                      
           
         })
        
         .catch(error =>{ console.log(error);
          setisloading(true);
          navigate("/");
         
         });  
 
   }


  async function fetchEpisodes() {
 
    const eps = await allEpisodes();
    setEpisodes(eps);
    setisloading(false);
   
  }

  // async function getEpisode(url) {
  //   var getE = null;
  //       await axios
  //       .get(url)
  //       .then( response  => {
  //         getE =  response.data;  
  //             })
  //       .catch(error => console.log(error)); 

  //       return getE;
  // }

  async function getEpisodes(ids) {
    var idstring = ids.join();

    var url =  "https://rickandmortyapi.com/api/episode/" + idstring;
    console.log(url);
    var getE = [];
    await axios
      .get(url)
      .then( response  => {        
        if(ids.length == 1){          
          getE.push(response.data); // extract episodes array from response                    
        }else{
          getE = response.data; // extract episodes array from response
        }
      })
      .catch(error => console.log(error));
    console.log(getE);
    return getE; // return episodes array
  }
  

  async function allEpisodes() {
    var allurleps = currentC.episode.map(ep => {
        var url = ep.split('/');
        return url[url.length -1];
    });
    
    console.log(allurleps, 'line 140');    
    // console.log('line 95', allurleps);
    const eps = await getEpisodes(allurleps);
    return eps;
  }
  
  var showEps = null;
  if(episodes.length > 0){
    showEps = episodes.map(ep => {    
      return (
        <div key={ep.id} className='divep' >
          <ul className='infoep' >
            <li>Episode: {ep.episode}</li>
            <li>Episode Name: {ep.name}</li>
            <li>Episode airdate: {ep.air_date}</li>
          </ul>
        </div>
      );
    });
  }



  return (
    <>
   { (isloading && currentC.episode.length == 0) ?
   <div className='oval'> 
   <Oval className='loader' />
   </div>

   :

  
    <div className='div-container' >
      <Link  className='linkChar' to="/">Go home</Link>
      <Link  className='linkChar' to={"/characters/" + currentC.id  } state = {currentC} >Go back</Link>
      <h1 className='htitle'  >{currentC.name}: All episodes</h1>
      
      {episodes.length > 0 && showEps}
    </div>
  
    
    }
    </>
  );
}


