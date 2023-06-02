import React, {  useState } from 'react';
import './App.css';


function AnimationExample() {
    const [show, setShow] = useState(false);
  
 
    return (
      <div className={`box ${show ? 'shrink' : ''}`} onClick={() => setShow(true)}>
        <h1>Hello, world!</h1>
      </div>
    );
  }
  
  export default AnimationExample;