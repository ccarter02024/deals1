// src/Main.js
import React from 'react';
import Deals from './Deals';
import './Main.css';


function Main() {
  return (
    <main className="main">
      <h2>Welcome to the Main Content Area</h2>
      <p>This is where your main content will go.</p>
      <Deals />
    </main>
  );
}

export default Main;
