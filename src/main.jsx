import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Make sure file extension is correct
import { BrowserRouter } from 'react-router-dom';
import './index.css';        // Correctly referencing index.css in the same folder

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/copyweb/">
    <App />
  </BrowserRouter>
);
