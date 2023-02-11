import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Views/Home';
import Task from './Views/Task';
import Routers from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
      <Routers/>
  </React.StrictMode>
  
);
