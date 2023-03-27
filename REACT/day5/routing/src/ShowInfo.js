import './App.css';
import { useLocation, Link } from "react-router-dom";
import './info.css';

function Info(props) {

  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div>
    {
      data &&

      <div className='cont'>
      <p>Name: {data.name}</p>
      <p>Surname: {data.surname}</p>
      <p>Age: {data.age}</p>
      <p>Email: {data.email}</p>
      </div>
    }
   
   </div>
  );
}

export default Info;