// src/App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Snowfall from './Snowfall';
import CenteredLogo from './CenteredLogo';
import './App.css';


function App() {
  return (
    <div className="App">
      <CenteredLogo />
      <Header />
      <Main />
      <Snowfall />
    </div>
  );
}


export default App;
