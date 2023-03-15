import './day2.css';
import { useState } from 'react';

function App() {
  //Using state 
  var [number, setNumber] = useState(0);
 
  function increase(){
    setNumber(number++);
  }
  
  function decrease(){
    setNumber(number--);
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




// function ButIncrease(funct){
//   return <button className='but' onClick={funct}> increase</button>
// }

// function ButDecrease(funct){
//   return <button className='but' onClick={funct}> decrease</button>
// }


export default App;