import './App.css';
import { Route, Routes, Link  } from "react-router-dom";
import Login from './Login';
import Info from './ShowInfo';
import Home from './Home';

function App() {
  return (
    <div>
       <nav className='nav'>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/ShowInfo">ShowInfo</Link></li> */}
        </ul>
      </nav>

    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/info" element={<Info />} /> 
    </Routes>
    </div>
  );
}

export default App;
