
import React, { useState } from "react";
import './NavBar.css';
import { useAuth0 } from "@auth0/auth0-react";

const NavigationBar = () => {
  const { loginWithRedirect,logout, isAuthenticated, user } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="/LogoNew.png" alt="logo" />
        <p>EzMyStartup</p>
      </div>

      <nav className={`nav-items ${isMenuOpen && "open"}`}>
        <ul className="nav__links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">About Us</a></li>
          {isAuthenticated && (
      <div className="user">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        {/* <p>{user.email}</p> */}
      </div>) }
          {isAuthenticated ? (
            <li>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> </li>
             
          ) : (
            <li>
             <button onClick={() => loginWithRedirect()}>Log In</button>
             </li>
          )}
            

        </ul>
      </nav>

      <div className={`nav-toggle ${isMenuOpen && "open"}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default NavigationBar;