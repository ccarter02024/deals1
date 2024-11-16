// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import CenteredLogo from './CenteredLogo';
import './App.css';
import './forms.css';

function App() {
  return (
    <div className="App">
      <CenteredLogo />
      <Header />
      <Main />
    </div>
  );
}


export default App;
