import './App.css';



function Info() {
  return (
    <div className="App">
      <h1>LOG IN </h1>
      <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required></input>
      
      <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input>

    <button type="submit">Login</button>
   
  </div>
  );
}

export default Info;