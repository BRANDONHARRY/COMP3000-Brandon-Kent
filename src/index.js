import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

// import { studioTheme } from "./ui-components";
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();