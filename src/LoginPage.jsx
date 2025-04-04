import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-content-wrapper">
        <div className="logo-section">
          <img src="/fakelogo.png" alt="Logo" className="login-logo" />
        </div>
        <div className="login-form-section">
          <div className="login-form-container">
            <h2>Login</h2>
            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
            <p className="signup-text">
              Don't have an account? <Link to="/">Return to home</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;