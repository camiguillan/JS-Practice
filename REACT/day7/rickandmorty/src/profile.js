import React from 'react'
import { Link,  useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


//https://rickandmortyapi.com/api/character/2
//https://rickandmortyapi.com/api/character/{props.char.id}

function Profile() {
    const [currentC, setCurrentC] = useState({});
    const location = useLocation();
    const data = location.state;
    console.log(data)

    useEffect(() => {
        //getting all characters 
        const url = "https://rickandmortyapi.com/api/character/" + data;

        console.log(url);
        getChar(url);
          
      }, []);
    
      function getChar(url){
        axios
            .get(url)
            .then(response => {
              const getC = response.data;      
              console.log(response);       
              setCurrentC(getC);
             //console.log(currentC);
             //console.log(getC);
            })
            .catch(error => console.log(error));  
    
      }


  return (
    <div>
    <Link to='/'>  Go Home</Link>

    <h1> Character Profile: {currentC.name}
    </h1>

    <div className='profile'>
        <img src= {currentC.image} alt='' ></img>
      
    </div>
    <div className='infoP'>
            <p>
                Status: {currentC.status}
            </p>
            <p>   Species: {currentC.species}  </p>
                
             <p>Gender: {currentC.gender}</p>  
             <p> Origin: {currentC.origin} </p>
             <p> Location: {currentC.location} </p>


        </div>

    </div>
  
  )
}


export default Profile;
