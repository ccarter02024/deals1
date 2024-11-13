// src/Header.js
import React, { useState } from 'react';
import './Header.css';
import { FaHome, FaFileAlt, FaDatabase, FaTags } from 'react-icons/fa';

const Header = () => {

  return (
    <header style={styles.header} className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              <FaHome className="nav-icon" /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#articles" className="nav-link">
              <FaFileAlt className="nav-icon" /> Articles
            </a>
          </li>
          <li className="nav-item">
            <a href="#database" className="nav-link">
              <FaDatabase className="nav-icon" /> Database
            </a>
          </li>
          <li className="nav-item">
            <a href="#deals" className="nav-link">
              <FaTags className="nav-icon" /> Deals
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );

};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff'
  },
  link: {
    cursor: 'pointer',
    color: '#fff',
    textDecoration: 'underline'
  }
};

export default Header;
