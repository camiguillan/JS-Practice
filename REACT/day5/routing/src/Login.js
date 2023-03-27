import { useState} from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    var info = {
      name,
       surname,
       age,
       email
    }

    function handleName(event){
        setName(event.target.value);
        console.log(name);
    }

    function handleSurname(event){
        setSurname(event.target.value);
        console.log(surname);
    }


    function handleAge(event){
        setAge(event.target.value);
    }

    function handleEmail(event){
        setEmail(event.target.value);
    }


    function handleSubmit(){
      info = {
        name,
         surname,
         age,
         email
      }
    }

  return (
    <div className="App">
      <h1>LOG IN </h1>

      <div>
      <label for="name"><b>Name:</b></label>
        <input type="text" value = {name} onChange={ handleName} 
        placeholder="Enter Name" name="name" required></input>

        <label for="surname"><b>Surname:</b></label>
        <input type="text"  value = {surname} onChange={ handleSurname} 
        placeholder="Enter Surname" name="sname" required></input>

        </div>

        <div>
      
        <label for="age"><b>Age:</b></label>
        <input type="text" value = {age} onChange={ handleAge}
         placeholder="Enter age" name="age" required></input>

        <label for="email"><b>Email:</b></label>
        <input type="text" value = {email} onChange={handleEmail}
        placeholder="Enter email" name="email" required></input>

        </div>
      

    <button type="submit" className="but" onClick={handleSubmit}>
    <Link to="/info" state={info}  className='link'>
          Login
        </Link>
      </button>
   
  </div>
  );
}

