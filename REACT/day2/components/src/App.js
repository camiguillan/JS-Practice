import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


//CONTROLLED COMPONENTS
function App() {

  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);
  const [email, setEmail] = useState('');
  const [showEmail, setShowemail] = useState(false);
  
  function handleSubmit(event) {
       //cancels the event if it is cancelable,
    // meaning that the default action that belongs to the event will not occur.
    //Clicking on a "Submit" button, prevent it from submitting a form
    event.preventDefault();
    setShowName(true);
    setShowemail(true);
    
  }

    
  return (
    <div className="App">
      <form>
        <div>
          <h1>CONTROLLED COMPONENT: Please complete the form</h1>
        <label>Name:</label>
        <input name="name" value={name} 
          onChange={(event) => setName(event.target.value)} required />
       
        <label>Email:</label>
        <input name="email" value={email} 
          onChange={(event) => setEmail(event.target.value)} required />
        

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        </div>
      </form>
      {/* Checks the condition if showName and showEmail are 
      true, which will be true only if we click on the submit button */}
      {showName === true && showEmail == true &&
      <p>You have submitted: Name: <strong>{name}</strong>  Email: <strong>{email}</strong> </p>}
    </div>
  );
  
}

export default App;
