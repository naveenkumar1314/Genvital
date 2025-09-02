import React from 'react';
import './Landingpage.css';
import mainlogo from '../assets/mainlogo.jpg';
import heroimage from '../assets/heroimage.avif';

const Landingpage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <div className="logo-container">
          <img src={mainlogo} alt="GEN-VITAL Logo" className="logo" />
          <span className="logo-text">GEN-VITAL</span>
        </div>
        <nav className="nav-bar">
          <a href="#">About us</a>
          <a href="#">contact</a>
          <a href="#" className="nav-button">Login</a>
        </nav>
      </div>

      <div className="hero-section" style={{ backgroundImage: `url(${heroimage})` }}>
        <h1 className="hero-heading">Welcome to GEN-VITAL:<br />Your Health, Our Priority.</h1>
        <p className="hero-subheading">Your trusted health platform</p>
        <div className="button-group">
          <button className="doctor-btn">I'm a Doctor</button>
          <button className="patient-btn">I'm a Patient</button>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;