import React from 'react';
import { useEffect, useState } from 'react';
import Receive from './reciever';

function SendData() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [post, setPost] = useState('');  
  // var data = {name: "camila",surname:"hola",post:"dasdas"};
  var data = {};

  function saveData(){
  data = {
      name,
      surname,
      post
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();
    saveData();
    console.log('Datos:', data);       
    
  };


    return (
      <div id="div">
        <p>Simple input box</p>
        Name: <input type="text" placeholder="Type here" value = {name}
        onChange={(event) => setName(event.target.value)}></input>
        <br></br>

        Surname: <input type="text" placeholder="Type here"  value= {surname}
        onChange={(event) => setSurname(event.target.value)}></input>
        <br></br>

        Post: <input type="text" placeholder="Type here" value= {post}
        onChange={(event) => setPost(event.target.value)}></input>

        <button onClick={handleSubmit}>Send Data</button>
        <Receive d= {data}/>
              
        
      </div>
    );
  }


export default SendData;