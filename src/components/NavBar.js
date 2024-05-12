import React, { useState } from "react";
import './NavBar.css'; 


const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <header className="header">
        <div className="logo-container">
          <img className="logo" src="/LogoNew.png" alt="logo" />
          <p>EzMyStartup</p>
        </div>
        
        <nav className={`nav-items ${isOpen && "open"}`}>
          <ul className="nav__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="/Login"><button>Login</button></a></li> 
          </ul>
        </nav>

        <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
         </div> 
      </header>
    );
  };
  
  export default NavigationBar;
