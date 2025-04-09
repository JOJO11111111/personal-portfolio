import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (

    <div className="login-page-container">
      <p>Urgent!! Your account is unsafe! Please login here for authentication!</p>
      <div className="logo-section">
        <img src="/fakelogo1.png" alt="Logo" className="login-logo" />
      </div>
      <div className="login-content-wrapper">
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
              Don't have an account? <a href="/">Return to home</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;