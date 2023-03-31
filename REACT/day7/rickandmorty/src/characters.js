import React from "react";
import Profile from "./profile";
import { useNavigate, Navigate } from "react-router-dom";


function Characters(props){
    const characters = props.char;
    const navigate = useNavigate();

    const ShowChars = () => {
        characters.map(
            char => <div className="column">
                <div className="card">
                    <img src={char.image} alt='' ></img>
                 </div>
            </div>
    )
            
        
    }


    function handleClick(e){
        // <Link to = '/profile' ></Link>
        navigate( "/characters/"+ e.currentTarget.id , {state: e.currentTarget.id});
        console.log(e.currentTarget.id);
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
                    <div className="cinfo" >
                        <h5> {char.name} </h5>
                        <p>  <b> Species:</b> {char.species} </p>
                        <p><b> Origin:</b>  {char.origin.name} </p>
                        <p> <b> Location: </b>   {char.location.name}</p>
                    </div>
                
                 </div>
            </div>
    )
            
        
    }

        
    </div>

);



}


export default Characters;