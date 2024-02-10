import React from 'react'
import App from './App.jsx'
import './App.css'
import './index.css'
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);


