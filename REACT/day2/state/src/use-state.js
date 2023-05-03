import React from 'react'
import { useState } from 'react';

export default function Usestate() {
   //Using state 
  var [number, setNumber] = useState(0);

 
  function increase(){
    setNumber(number+1);
  }
  
  function decrease(){
   setNumber(number-1);
  }

  function reset(){
    setNumber(0);

  }

  return (
    <div className="App">
      <h1>Increasing an decreasing a variable</h1>
      <p> {number} </p>
      
      <div>
        <button className='but' onClick={increase}> increase</button>
        <button className='but' onClick={decrease}> decrease</button>
        <button className='but' onClick={reset}> reset</button>
      </div>

    </div>
  );
}
