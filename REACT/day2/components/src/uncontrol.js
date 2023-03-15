import logo from './logo.svg';
import './uncontrol.css';
import React, { useRef } from 'react';

//UNCONTROLLED COMPONENT
function Uncontrol() {
    
    const inputRefName = useRef(null);
    const inputRefEmail = useRef(null);
    const messageRef = useRef(null);

    function handleSubmit(event) {
    event.preventDefault();
    const name = inputRefName.current.value;
    const email = inputRefEmail.current.value;
    //const p = <p>You have submitted: Name: <strong>{name}</strong>  Email: <strong>{email}</strong> </p>;
    //messageRef.current.innerHTML = p;
    const p = document.createElement('p');
    const text = document.createTextNode('You have submitted: Name:'+" " + name +' ' +'Email:'+ ' ' +email);
    p.appendChild(text);
    document.getElementById('div').appendChild(p);
    }

  return (
    <div className="App">
      <h1>Uncontrolled Component: please complete the form </h1>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" name="name" ref={inputRefName} required/>
        
        <label>Email:</label>
        <input type="text" name="email" ref={inputRefEmail} required/>
        <button type="submit">Submit</button>
      </form>
      <div id='div' ref={messageRef}></div>

    </div>
  );
}
 

export default Uncontrol;