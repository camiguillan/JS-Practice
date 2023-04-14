import React from "react";
import { useContext } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
//import CharsContext from CharacterCards;
import {charsContext} from "./character-cards";
import {charsContextHome} from "./home";
import { charsContextCards2 } from "./character-cards2";


function Characters(){
    //const characters = props.char;
    const navigate = useNavigate();
    const charId = useParams();
    const characters = useContext(charsContext);
    const charactersHome = useContext(charsContextHome);
    const chars2 = useContext(charsContextCards2);

    function handleClick(e){
        // <Link to = '/profile' ></Link>
        console.log(  'using params', charId.id, charId);
        navigate( "/characters/"+ e.currentTarget.id , {state: e.currentTarget.id});
       
        //<Navigate to='/profile'></Navigate>
    }

return (

    <div className="row">
       {/* {ShowChars} */}

       { characters? 
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

        : chars2?

        chars2.map(
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

         :

        charactersHome.map(
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

        
    </div>

);



}


export default Characters;