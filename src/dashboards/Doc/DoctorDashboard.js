// src/dashboards/Doc/DoctorDashboard.js

import React from 'react';
import './DoctorDashboard.css';

// --- LOCAL ASSETS IMPORTS ---
// Make sure these paths are correct relative to your DoctorDashboard.js file
import healthGraph from '../../assets/health_trend_graph.png'; // Path to graph image
import progressCircle from '../../assets/progress_circle.png'; // Path to progress circle image
import doctorProfilePic from '../../assets/doctor_profile.png'; // Path to doctor profile image - Idhu unn-comment pannirukku!


const DoctorDashboard = () => {
    // Dummy data for demonstration
    const doctorName = "Dr. Priya Vijayan"; // doctorName-a define panni use pannikkalaam
    // ... (your existing dummy data and other code)

    return (
        <div className="doctor-dashboard-container">
            {/* Top Navigation Bar */}
            <div className="top-navbar">
                <div className="navbar-left">
                    <span className="app-logo">GEN-VITAL</span>
                </div>
                <div className="navbar-center">
                    <input type="text" placeholder="Search Patient by Name/ID" className="search-bar" />
                </div>
                <div className="navbar-right">
                    {/* doctorName-a kaattu */}
                    <span className="doctor-name">{doctorName}</span> 
                    {/* Use the locally imported profile image - Idhu unn-comment pannirukku! */}
                    <img src={doctorProfilePic} alt="Doctor Profile" className="profile-icon" /> 
                    <button className="logout-button">Logout</button>
                </div>
            </div>

            {/* Main Content Wrapper (Sidebar + Cards) */}
            <div className="main-content-wrapper">
                {/* Sidebar Navigation */}
                <div className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="active">Dashboard</li>
                        <li>Patient Records</li>
                        <li>Health Analytics</li>
                        <li>Appointments</li>
                        <li>Alerts</li>
                        <li>Settings</li>
                    </ul>
                </div>

                {/* Dashboard Cards Area */}
                <div className="dashboard-cards-area">
                    {/* Card 1: High-Risk Patients */}
                    <div className="card high-risk-patients-card">
                        <h3>High-Risk Patients</h3>
                        {/* ... (existing patient list) ... */}
                        <div className="card-actions">
                            <button className="card-button">View All Alerts</button>
                            <button className="card-button secondary-button">Contact Team</button>
                        </div>
                    </div>

                    {/* Card 2: Overall Patient Health Trends */}
                    <div className="card health-trends-card">
                        <h3>Overall Patient Health Trends</h3>
                        <div className="trend-graph-placeholder">
                            {/* Use the locally imported graph image */}
                            <img src={healthGraph} alt="Health Trend Graph" /> 
                        </div>
                        <p className="trend-summary">Average Patient Health Index: <span className="decline-text">6.5% Decline</span></p>
                    </div>

                    {/* Card 3: Pending Actions / Consultations */}
                    <div className="card pending-actions-card">
                        <h3>Pending Actions / Consultations</h3>
                        {/* ... (existing pending actions list) ... */}
                        <button className="card-button">View All Actions</button>
                    </div>

                    {/* Card 4: Recent Patient Activity */}
                    <div className="card patient-activity-card">
                        <h3>Recent Patient Activity</h3>
                        <div className="progress-circle-placeholder">
                            {/* Use the locally imported progress circle image */}
                            <img src={progressCircle} alt="Progress Circle" /> 
                        </div>
                        <p>Patient X. Yadav: <span className="activity-detail">85% Compliance with Meds</span></p>
                        <button className="card-button">View Activity Log</button>
                    </div>

                    {/* Card 5: Latest Vital Readings */}
                    <div className="card vital-readings-card">
                        <h3>Latest Vital Readings</h3>
                        {/* ... (existing vital readings list) ... */}
                    </div>

                    {/* Card 6: Upcoming Appointments */}
                    <div className="card appointments-card">
                        <h3>Upcoming Appointments</h3>
                        {/* ... (existing appointments list) ... */}
                        <button className="card-button">Monthly View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;