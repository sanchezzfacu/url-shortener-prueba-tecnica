import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';


axios.defaults.baseURL = process.env.BACK_API_REST || "http://localhost:3001";
// axios.defaults.baseURL = 'https://url-shortener-mongo.herokuapp.com';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
