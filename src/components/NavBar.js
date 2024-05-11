import React from 'react';
import './NavBar.css'; // Import the CSS file for styling

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
        
        <a className="cta" href="#">
          <button>Login</button>
        </a>
      </header>
    );
  };
  
  export default NavigationBar;
