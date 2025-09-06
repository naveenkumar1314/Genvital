import React, { useState } from 'react';
import './DoctorSignup.css';

// This is a dummy list of states for the dropdown menu
const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
];

const DoctorSignup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: '',
        licenseNumber: '',
        state: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add verification logic here
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert("Doctor Signup Successful!");
        // Redirect to login or dashboard
    };

    return (
        <div className="auth-container">
            <div className="signup-card">
                <h1>Doctor Signup</h1>
                <p>Register your professional details to join GEN-VITAL.</p>
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
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="licenseNumber">Medical License Number:</label>
                        <input type="text" id="licenseNumber" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">Registered State:</label>
                        <select id="state" name="state" value={formData.state} onChange={handleChange} required>
                            <option value="">Select your state</option>
                            {indianStates.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="auth-btn">Sign Up as Doctor</button>
                </form>
            </div>
        </div>
    );
};

export default DoctorSignup;