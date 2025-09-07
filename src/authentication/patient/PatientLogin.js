import React from 'react';
import './PatientLogin.css';

const PatientLogin = ({ onLoginClick, onSignupClick }) => {
    return (
        <div className="auth-container">
            <div className="login-card">
                <h1>Patient Login</h1>
                <p>Manage your health data.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="auth-btn">Login as Patient</button>
                </form>
                <div className="switch-link">
                    New to GEN-VITAL? <span onClick={onSignupClick}>Sign Up as a Patient.</span>
                </div>
            </div>
        </div>
    );
};

export default PatientLogin;