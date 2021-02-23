import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
//import App from './App';
import Calculadora from './main/Calculadora.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <div>
        <h1>Calculadora</h1>
        <Calculadora />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
