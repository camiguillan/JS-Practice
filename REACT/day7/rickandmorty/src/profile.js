import React from 'react'
import { Link,  useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { Navigate } from 'react-router-dom';


//https://rickandmortyapi.com/api/character/2
//https://rickandmortyapi.com/api/character/{props.char.id}

function Profile() {
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
    const [episodes, setEpisodes] = useState([]);
    const location = useLocation();
    const [showE, setShowEpisode] = useState(false);
    const data = location.state;
    //const [butText, setButText] = useState('Show Episodes details');
    console.log(data);

    useEffect( () => {
        const url = "https://rickandmortyapi.com/api/character/" + data;
        console.log(url);
        getChar(url);
        allEpisodes();
          
      }, []);
    
      function getChar(url){
        axios
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
             //console.log(currentC);
             console.log(currentC);
             console.log(getC);
             console.log(currentC.location);
             console.log(currentC.location.name);
            })
            .catch(error => console.log(error));  

           
    
      }

      function getEpisode(url){
        const getE = null;
        axios
        .get(url)
        .then( response  => {
          getE =  response.data;      
              })
        .catch(error => console.log(error)); 
        
        return getE;
      }


      function allEpisodes(){
            const episodes = [];
            currentC.episode.map( epUrl => {
                    const epi = getEpisode(epUrl);
                    episodes.push(epi);
            }   )

            setEpisodes(episodes);
      }


      function viewdetails(){
        setShowEpisode(!showE)
        // if(!showE){
        //     setButText('Hide Episode Details');
        //  }
        //  else{
        //     setButText('Show Episodes Details');
        //     }

      }


      function showEpisodes(){
        return (
                <div>
                    { episodes.map(ep =>
                        {
                            <ul>
                            <li> Episode:  {ep.episode}  </li>
                            <li> Episode Name:  {ep.name}  </li>
                            </ul>
                        }) }
                </div>
        );
      }


  return (
    <div className='divProfile'>
    <Link className='linkProfile' to='/'>  Go Home</Link>
    <Link  className='linkProfile' to='/characters'>  Go Back</Link>

    <h1 className='h1Profile'> Character Profile: {currentC.name}
    </h1>

    <div className='profile'>
        <img  className='imgP' src= {currentC.image} alt='' ></img>
      
 

        <ul  className='infoP'>
            <li> <b> Status: </b>   {currentC.status}   </li>
            <li>  <b>Species: </b> {currentC.species}    </li>
            <li> <b>  Gender:</b>  {currentC.gender}</li>
            <li> <b> Origin: </b> {currentC.origin.name}  </li>
            <li> <b>  Location:  </b> {currentC.location.name}  </li>
            <li> <b> Number of Episodes:   </b> {currentC.episode.length} 
            {/* <Navigate  to='/characters/profile/episodes' state={episodes} >   View EPisodes Details    </Navigate> */}
            {/* <button onClick={viewdetails()} > Show Episodes Details </button> 
            { showE && <div className='container-titles'> {showEpisodes} </div>} */}
            
            </li>
        </ul>
         

        </div>

    </div>
  
  )
}


export default Profile;
