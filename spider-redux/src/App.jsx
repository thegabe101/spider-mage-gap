import React from 'react';
import './App.css';
// import NavBar from './components/home';
import Spider from './components/header';
import { Filter } from './components/Filter'
import { Products } from './components/Products'

import { BrowserRouter} from 'react-router-dom'
import Router from './Router'


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
