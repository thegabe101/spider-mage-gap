import React from 'react';
// import NavBar from './components/home';

import { BrowserRouter} from 'react-router-dom'
import Router from './Router'

function App(){
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
