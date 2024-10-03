import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home/Home';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <Home />
  </Router>
  // </React.StrictMode>
)