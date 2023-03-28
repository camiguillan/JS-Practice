import React from "react";

function Characters(props){
    const characters = props.char;

    const ShowChars = () => {
        characters.map(
            char => <div className="column">
                <div className="card">
                    <img src={char.image} alt='' ></img>
                 </div>
            </div>
    )
            
        
    }

return (

    <div className="row">
       {/* {ShowChars} */}

       {
        characters.map(
           ( char, index) => <div key={index} className="column">
                <div  className="card">
                    <img src={char.image} alt='' ></img>
                    <div className="cinfo">
                        <h5> {char.name} </h5>
                        <p>Species: {char.species} </p>
                        <p>Origin: {char.origin.name} </p>
                        <p>Location: {char.location.name}</p>
                    </div>
                
                 </div>
            </div>
    )
            
        
    }

        
    </div>

);



}


export default Characters;