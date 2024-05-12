import React from 'react';
import './NavBar.css'; 
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
      <header className="header">
        <div className="logo-container">
          <img className="logo" src="/LogoNew.png" alt="logo" />
          <p>EzMyStartup</p>
        </div>
        
        <nav>
          <ul className="nav__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
        
        <Link to="/Login"><button>Login</button></Link>
      </header>
    );
  };
  
  export default NavigationBar;
