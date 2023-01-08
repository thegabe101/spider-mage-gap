import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import NavBar from './components/home';
import Spider from './components/header';
import ButtonAppBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <ButtonAppBar></ButtonAppBar>
      <BrowserRouter></BrowserRouter>
    </div>
  );
}

export default App;
