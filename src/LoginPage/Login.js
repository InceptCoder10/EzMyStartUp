import React from 'react';
import './Login.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    
    <div className="container">
      <div className="login-box blur">
        <h2>Login</h2>
        <form action="#" method="post">
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
            <a href="">Forgot Password?</a>
          </div>

          <Link to="/"><button type="submit" id="redirectButton">Login</button></Link>
        
          <div className="register">
            <p>Don't have an account?<a href="#">Register</a></p>
          </div>
          <div className="or"><p>or</p></div>
          <div className="google-sign">
            <a href="#">
              <img src="./OurServes/google-icon1.svg" alt="Google Icon"/>
              <p>Sign in with Google</p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;


