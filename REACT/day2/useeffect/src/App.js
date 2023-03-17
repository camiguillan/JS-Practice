import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import './Animation';
import AnimationExample from './Animation';

function App() {
  const [count, setCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
 

  useEffect(() => {
   
    document.title = `You clicked ${count} times`;
    
    if (count === 20) {
      document.title = "Congratulations! you finished counting!";
      setShowDialog(true);

      return () => {
        document.title = "React App";
      }

      }

  }, [count]);


  function handleClick(){
    setCount(count + 1);
  
  }

  const handleCloseDialog = () => {
    setShowDialog(false);
    setCount(0);
  };

  return (
    <div className='container'>
      
      <p className='App'>You clicked {count} times</p>
      <button className='button' onClick={() => handleClick()  }>
        Click me
      </button>

      {showDialog && (
        <div className="dialog">
          <p>Congratulations! You finished counting!</p>
          <button  className='button' onClick={handleCloseDialog}>Close</button>
        </div>
      )}

    
    </div>

 

    
  );
}

export default App;



