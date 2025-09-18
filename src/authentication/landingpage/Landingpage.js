import React from 'react';
import './Landingpage.css';
import mainlogo from '../../assets/mainlogo.jpg';
import heroimage from '../../assets/heroimage.avif';

const Landingpage = ({ onLoginClick }) => { 
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo-container">
          <img src={mainlogo} alt="GEN-VITAL" className="logo" />
          <h1 className="logo-text">GEN-VITAL</h1>
        </div>
        <div className="nav-and-buttons">
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
          </div>
          <button onClick={onLoginClick} className="login-btn">Login</button>
        </div>
      </nav>
      <section className="hero-section" style={{
        backgroundImage: `url(${heroimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-heading">Welcome to GEN-VITAL:<br />Your Health, Our Priority.</h1>
          <p className="hero-subheading">Your trusted health platform.</p>
          <div className="button-group">
            <button onClick={() => onLoginClick('doctor')} className="doctor-btn">I'm a Doctor</button>
            <button onClick={() => onLoginClick('patient')} className="patient-btn">I'm a Patient</button>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <h2 className="section-heading">Why Choose GEN-VITAL?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">⚕️</div>
            <h3>Expert Doctors</h3>
            <p>Consult top medical experts instantly.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🛡️</div>
            <h3>Secure & Private</h3>
            <p>Your health data is safe with us.</p>
          </div>
          <div className="feature-card">
            <div className="icon">❤️</div>
            <h3>24/7 Access</h3>
            <p>Healthcare support anytime, anywhere.</p>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="about-content">
          <h2 className="section-heading">About GEN-VITAL</h2>
          <p>GEN-VITAL is your one-stop health platform connecting doctors and patients with trusted, secure, and accessible medical support. Our goal is to prioritize your well-being and make healthcare simple and effective for everyone.</p>
        </div>
      </section>
      <footer className="footer-section">
        <p>&copy; 2025 GEN-VITAL. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;