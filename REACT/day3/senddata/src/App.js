import React from 'react';
import { useEffect, useState } from 'react';
import Receive from './reciever';
import './App.css';

function SendData() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [post, setPost] = useState('');  
  const [showBool, setShow] = useState(false);  
  // var data = {name: "camila",surname:"hola",post:"dasdas"};
  var data = {    
    name,
    surname,
    post};
  var show = {showBool}

  function saveData(){
  data = {
      name,
      surname,
      post
    };

  }

  function handleSubmit(event) {
    event.preventDefault();
    saveData();
    console.log('Datos:', data);       
    setShow(true);

  };


    return (
      <div id="div">
        <h1>Posts</h1>

        <div>
        Name: <input type="text" placeholder="Type here" value = {name}
        onChange={(event) => setName(event.target.value)}></input>
        <br></br>
        </div>
       
      <div>
        Surname: <input type="text" placeholder="Type here"  value= {surname}
        onChange={(event) => setSurname(event.target.value)}></input>
        <br></br>
        </div>


        <div>
        Post: <input type="text" placeholder="Type here" value= {post}
        onChange={(event) => setPost(event.target.value)}></input>
        </div>

        <button onClick={handleSubmit}>Send Data</button>
        <Receive d= {data} s= {show}/>
              
        
      </div>
    );
  }


export default SendData;