import React from 'react';
import './login.css';

const Login = ({ onLogin, onPageChange }) => {

    const handleSubmit = (event) => {
        event.preventDefault(); 
        onLogin(); 
    };

    return (
        <div className="auth-container">
            <div className="login-card">
                <h1>Login to GEN-VITAL</h1>
                <p>Welcome back! Please enter your details.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="auth-btn">Login</button>
                </form>
                <p className="auth-link">
                    Don't have an account? <a href="#" onClick={onPageChange}>Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;