import React from 'react';
import { useEffect } from 'react';


function Receive(props) {  
  const show = props.s.showBool;
  console.log("Show is ", show);
  if(show == true){    
    return (
      
      <div>
        <p>Name: {props.d.name}</p>
        <p>Surname: {props.d.surname}</p>
        <p>Post: {props.d.post}</p>
      </div>
    );
    

    }
    // else
    // return (
    //   <div>
    //   <p>Name: </p>
    //   <p>Surname:</p>
    //   <p>Post: </p>
    // </div>
    // )
  }


export default Receive;


