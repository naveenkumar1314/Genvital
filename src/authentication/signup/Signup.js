import React from 'react';
import './Signup.css';

const Signup = ({ onPageChange }) => {
    return (
        <div className="auth-container">
            <div className="signup-card">
                <h1>Create Your GEN-VITAL Account</h1>
                <p>Join us to manage your health needs.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    
                    <div className="form-group">
                        <label>Select your role:</label>
                        <div className="role-selection">
                            <label>
                                <input type="radio" name="role" value="patient" required /> Patient
                            </label>
                            <label>
                                <input type="radio" name="role" value="doctor" required /> Doctor
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <p className="auth-link">
                    Already have an account? <a href="#" onClick={onPageChange}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;