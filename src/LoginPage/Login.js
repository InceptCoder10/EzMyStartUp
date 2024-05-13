import React, { useState } from 'react';
import './Login.css';
import { useGoogleLogin } from '@react-oauth/google';
import { redirect } from 'react-router-dom';

const GOOGLE_ICON_SRC = './OurServes/google-icon1.svg';

function LoginPage() {
  
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="login-box blur">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <input type="text" id="username" name="username" placeholder="Username" required />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Password" required />
          </div>
          <div className="check">
            <div className="checkbox">
              <input type="checkbox" name="RememberMe" id="RememberMe" />
              <label htmlFor="RememberMe">Remember Me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" id="redirectButton">Login</button>

          <div className="register">
            <p>Don't have an account?<a href="#">Register</a></p>
          </div>
          <div className="or"><p>or</p></div>
          <div className="google-sign">
            <a role="button">
              <img src={GOOGLE_ICON_SRC} alt="Google Icon" title="Sign in with Google" aria-label="Sign in with Google" />
              <p>Sign in with Google</p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;