import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import './episodes.css';
import { Oval } from  'react-loader-spinner';


export default function Episodes() {
  var [episodes, setEpisodes] = useState([]);
  
  const [isloading, setisloading] = useState(true);
  const location = useLocation();
  const data = location.state;
  const charId = useParams();
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
      getData();
  }, []);

  async function getData(){
    await fetchChar();
    await fetchEpisodes();
    if (currentC != undefined && episodes != undefined){
      setisloading(false);
    }
  };

  async function fetchChar(){
    const url = "https://rickandmortyapi.com/api/character/" + charId.id;
    await  getChar(url);

  }

  async function getChar(url){
    await  axios
         .get(url)
         .then( response  => {
           const getC =  response.data;      
           //console.log(response);       
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
           //console.log(getC.episode);
          //  setEpsID(getC.episode.map(ep =>{
          //   var parts = ep.split("/");
          //   return parts[parts.length - 1 ].join(",");
          //   } ));
                        
         })
        
         .catch(error => console.log(error));  
 
   }


  async function fetchEpisodes() {
 
    const eps = await allEpisodes();
    setEpisodes(eps);
   
  }

  async function getEpisode(url) {
    var getE = null;
        await axios
        .get(url)
        .then( response  => {
          getE =  response.data;  
          // console.log(response.data);  
          // console.log(getE);  
              })
        .catch(error => console.log(error)); 
       
        // console.log(url);
        //console.log(getE);  
        return getE;
  }

  async function getEpisodes(ids){
    var idstring = ids.join().toString();
    // console.log(ids.join(), ids.join().typeOf());
    var url =  "https://rickandmortyapi.com/api/episode/" + idstring;
    var getE = null;
    await axios
      .get(url)
      .then( response  => {
        getE =  response.data;  
        console.log(response.data);  
        // console.log(getE);  
            })
      .catch(error => console.log(error)); 
    
    //console.log(url);
    //console.log(getE);  
    //console.log(idstring);
    return getE; //list 
    
  }

  async function allEpisodes() {
    var allurleps = currentC.episode.map(ep => {
        var url = ep.split('/');
        return url[url.length -1];
    });
    
    console.log(allurleps, 'line 140');
    console.log('line 95', allurleps);
    const eps = await getEpisodes(allurleps);
    return eps;
  }
  

  const showEps = episodes.map(ep => {
    console.log('Rendering episode:', ep);
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


  return (
    <>
   { isloading?
   <div className='oval'> 
   <Oval className='loader' />
   </div>
   :
   <div className='div-container' >
      <Link  className='linkChar' to="/">Go home</Link>
      <Link  className='linkChar' to={"/characters/" + currentC.id  } state = {currentC} >Go back</Link>
      <h1 className='htitle'  >{currentC.name}: All episodes</h1>
      
      {episodes.length > 0 && showEps}
    </div>}
    </>
  );
}


