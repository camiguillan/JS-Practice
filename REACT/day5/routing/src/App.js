import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Info from './ShowInfo';
import Home from './Home';    

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/info" element={<Info />} /> 
    </Routes>
    </div>
  );
}

export default App;
