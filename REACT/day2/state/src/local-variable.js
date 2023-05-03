import React from 'react'

export default function VocalVariable() {
  //Using state 
  var number = 0;
 
  function increase(){
    number++;
  }
  
  function decrease(){
    number--;
  }

  function reset(){
    number = 0;
  }

  return (
    <div className="App">
      <h1>Increasing an decreasing a LOCAL variable</h1>
      <p> {number} </p>
      
      <div>
        <button className='but' onClick={increase}> increase</button>
        <button className='but' onClick={decrease}> decrease</button>
        <button className='but' onClick={reset}> reset</button>
      </div>

    </div>
  );
}
