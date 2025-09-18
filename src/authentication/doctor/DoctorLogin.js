// src/authentication/doctor/DoctorLogin.js

import React, { useState } from 'react';
import './DoctorLogin.css';

// onLoginSuccess prop-a receive pannanum
function DoctorLogin({ onSignupClick, onLoginSuccess }) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // <--- Idhu mukkiyam. Default form submit-a thadukkum

    // --- TEMPORARY UI FLOW LOGIC ---
    // Backend connection illama, button click panna udane dashboard-kku poga.
    if (email && password) { // Email and password empty illama irundha mattum
      console.log("DoctorLogin: Login button clicked! Calling onLoginSuccess()..."); // Debugging
      onLoginSuccess(); // <--- IDHU Dhaan MUKKIYAM! App.js-la irukkura handleDoctorLoginSuccess-a call pannum
    } else {
      setError('Please enter both email and password.'); // Error message
    }

    // --- (Original Backend Flow - ippo comment-la irukkanum) ---
    /*
    try {
      // ... your actual backend login API call ...
      // If login is successful:
      // onLoginSuccess(); 
      // Else:
      // setError('Login failed');
    } catch (err) {
      setError('An error occurred');
    }
    */
  };

  return (
    <div className="doctor-login-container">
      <div className="doctor-login-box">
        <h2>Doctor Login</h2>
        {/* <form onSubmit={handleSubmit}> - Make sure this is linked to handleSubmit */}
        <form onSubmit={handleSubmit}> 
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {/* <button type="submit" className="login-button"> - Make sure this is type="submit" */}
          <button type="submit" className="login-button">Login</button> 
        </form>
        <p className="signup-text">
          Don't have an account?{' '}
          <span className="signup-link" onClick={onSignupClick}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default DoctorLogin;