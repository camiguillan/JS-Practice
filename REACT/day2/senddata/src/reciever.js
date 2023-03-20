import React from 'react';
import { useEffect } from 'react';


function Receive(props) {    
  useEffect(() => {
    console.log('data changed:', props.d);
  }, [props.d]);
  return (
    <div>
      <p>Name: {props.d.name}</p>
      <p>Surname: {props.d.surname}</p>
      <p>Post: {props.d.post}</p>
    </div>
  );
   

  }

export default Receive;


