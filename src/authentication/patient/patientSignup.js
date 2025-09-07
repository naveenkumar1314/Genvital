import React, { useState } from 'react';
import './PatientSignup.css';

const PatientSignup = ({ onLoginClick }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Patient Signup Successful!");
        onLoginClick('patient'); // Redirect to patient login
    };

    return (
        <div className="auth-container">
            <div className="signup-card">
                <h1>Patient Signup</h1>
                <p>Sign up to manage your health.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="auth-btn">Sign Up as Patient</button>
                </form>
                <div className="switch-link">
                    Already have an account? <span onClick={() => onLoginClick('patientLogin')}>Login here.</span>
                </div>
            </div>
        </div>
    );
};

export default PatientSignup;