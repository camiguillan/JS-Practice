import React from "react";
import { useContext } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import {charsContext} from "./character-cards";
import {charsContextHome} from "./home";
import { charsContextCards2 } from "./character-cards2";
import { appContext } from "../App";
import { useEffect, useState} from 'react';



function Characters(props){
    //const characters = props.char;
    const navigate = useNavigate();
    const charId = useParams();
    //const chars = useContext(charsContext);
    //const charactersHome = useContext(charsContextHome);
    const chars = useContext(charsContextCards2);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);

    // use this to show first 3 chars in Home page 
    //use this to show firs page in characters page 
    const charsInfo = useContext(appContext); 
    var pageCode = props.value; 


    useEffect( () => {

        if(charsInfo != null ){
            if(pageCode == 'home'){
                const firstChars = charsInfo[0].slice(0,3);
                //console.log(firstChars);
                setCharacters(firstChars);
                //console.log(characters);

            }
            else if(pageCode == 'charsPage1All'){
                setCharacters(charsInfo[0]);
            }
            else{
                setCharacters(chars);
            }
        }
    }, [pageCode]);



    function handleClick(e){
        // <Link to = '/profile' ></Link>
        console.log(  'using params', charId.id, charId);
        navigate( "/characters/"+ e.currentTarget.id , {state: e.currentTarget.id});
       
        //<Navigate to='/profile'></Navigate>
    }

return (

    <div className="row">
       {/* {ShowChars} */}

       {
             characters.map(
                ( char, index) => 
                <div key={index} className="column">
                     <div  className="card"   id={char.id.toString()}  onClick={handleClick}  >
                         <img src={char.image} alt='' ></img>
                         <h5> {char.name} </h5>
                         <div className="cinfo" >
                             
                             <p>  <b> Species:</b> {char.species} </p>
                             <p><b> Origin:</b>  {char.origin.name} </p>
     
                             {/* <p> <b> Location: </b>   {char.location.name}</p>*/}
                            
                         </div>
                     
                      </div>
     
                 </div>
             )
       }

       {/* { chars? 
        chars.map(
           ( char, index) => 
           <div key={index} className="column">
                <div  className="card"   id={char.id.toString()}  onClick={handleClick}  >
                    <img src={char.image} alt='' ></img>
                    <h5> {char.name} </h5>
                    <div className="cinfo" >
                        
                        <p>  <b> Species:</b> {char.species} </p>
                        <p><b> Origin:</b>  {char.origin.name} </p>

                        {/* <p> <b> Location: </b>   {char.location.name}</p>
                       
                    </div>
                
                 </div>

            </div>
        ) */

        // chars?

        // chars.map(
        //     ( char, index) => 
        //     <div key={index} className="column">
        //          <div  className="card"   id={char.id.toString()}  onClick={handleClick}  >
        //              <img src={char.image} alt='' ></img>
        //              <h5> {char.name} </h5>
        //              <div className="cinfo" >
                         
        //                  <p>  <b> Species:</b> {char.species} </p>
        //                  <p><b> Origin:</b>  {char.origin.name} </p>
 
        //                  {/* <p> <b> Location: </b>   {char.location.name}</p>*/}
                        
        //              </div>
                 
        //           </div>
 
        //      </div>
        //  )

        //  : pageCode = "home"?

        // charactersHome.map(
        //     ( char, index) => 
        //     <div key={index} className="column">
        //          <div  className="card"   id={char.id.toString()}  onClick={handleClick}  >
        //              <img src={char.image} alt='' ></img>
        //              <h5> {char.name} </h5>
        //              <div className="cinfo" >
                         
        //                  <p>  <b> Species:</b> {char.species} </p>
        //                  <p><b> Origin:</b>  {char.origin.name} </p>
 
        //                  {/* <p> <b> Location: </b>   {char.location.name}</p>*/}
                        
        //              </div>
                 
        //           </div>
 
        //      </div>
        //  )
        //  : console.log("nothing")

            
        
    }

        
    </div>

);



}


export default Characters;