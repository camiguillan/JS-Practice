import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sender from './App';
import reportWebVitals from './reportWebVitals';
import SendData from './App';
import Receive from './reciever';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SendData />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
