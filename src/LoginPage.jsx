import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <img src="/fakelogo.png" alt="Logo" className="login-logo" />
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/">Return to home</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;