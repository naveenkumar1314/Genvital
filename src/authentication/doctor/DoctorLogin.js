import React from 'react';
import './DoctorLogin.css';

const DoctorLogin = ({ onSignupClick, onLoginClick }) => {
    return (
        <div className="auth-container">
            <div className="login-card">
                <h1>Doctor Login</h1>
                <p>Access your patient dashboard.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="regNumber">Registration Number:</label>
                        <input type="text" id="regNumber" name="regNumber" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="auth-btn">Login as Doctor</button>
                </form>
                <div className="switch-link">
                    New to GEN-VITAL? <span onClick={onSignupClick}>Sign Up as a Doctor.</span>
                </div>
            </div>
        </div>
    );
};

export default DoctorLogin;