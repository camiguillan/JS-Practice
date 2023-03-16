import React, { useEffect, useState } from 'react';
import './App.css';


function AnimationExample() {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      setShow(true);
    }, []);
  
    return (
      <div className={`box ${show ? 'fade-in' : ''}`}>
        <h1>Hello, world!</h1>
      </div>
    );
  }
  
  export default AnimationExample;