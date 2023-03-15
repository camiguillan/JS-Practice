import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Uncontrol from './uncontrol';
import Stateless from './stateless'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <Uncontrol />
  </React.StrictMode>
);


const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <React.StrictMode>
    <Stateless />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
