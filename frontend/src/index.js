import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Query1 from './Query1';
import Query2 from './Query2';
import Query3 from './Query3';
import Query4 from './Query4';
import Query5 from './Query5';
import Query6 from './Query6';
import Query7 from './Query7';
import Query8 from './Query8';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Query1 />
    <Query2 />
    <Query3 />
    <Query4 />
    <Query5 />
    <Query6 />
    <Query7 />
    <Query8 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
