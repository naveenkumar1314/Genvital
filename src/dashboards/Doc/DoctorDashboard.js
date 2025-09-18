// src/dashboards/Doc/DoctorDashboard.js

import React from 'react';
import './DoctorDashboard.css';
// import { useNavigate } from 'react-router-dom'; // <--- Idhai ippo thevaiyillai. Remove panniru.


// --- LOCAL ASSETS IMPORTS ---
import healthGraph from '../../assets/health_trend_graph.png';
import doctorProfilePic from '../../assets/doctor_profile.png';


const DoctorDashboard = () => {
    // const navigate = useNavigate(); // <--- useNavigate hook-a ippo thevaiyillai. Remove panniru.

    // Dummy data for demonstration
    const doctorName = "Dr. Priya Vijayan";
    const patients = [
        { id: 1, name: "Patient A. Kumar", status: "Critical Alert", alert: "ECG Irregularity", risk: "high" },
        { id: 2, name: "Patient B. Singh", status: "Elevated BP Detected", alert: "Blood Pressure High", risk: "moderate" },
        { id: 3, name: "Patient C. Reddy", status: "Oxygen Saturation Low", alert: "SpO2 Below Normal", risk: "high" },
        { id: 4, name: "Patient D. Sharma", status: "Stable", alert: "No New Issues", risk: "low" },
    ];
    const pendingActions = [
        { id: 1, task: "Review Recent ECG for Patient A. Kumar", status: "Urgent", type: "red" },
        { id: 2, task: "Follow-up Call with Patient B. Singh", status: "Pending", type: "yellow" },
        { id: 3, task: "Approve New Patient Request (Patient E. Khan)", status: "New", type: "green" },
    ];
    const latestVitals = [
        { id: 1, patient: "Patient Y. Gupta", vital: "Heart Rate", value: "72 BPM", status: "Normal" },
        { id: 2, patient: "Patient Z. Patel", vital: "SpO2", value: "92%", status: "Low - Alert!" },
        { id: 3, patient: "Patient A. Kumar", vital: "Temperature", value: "98.6°F", status: "Normal" },
    ];
    const upcomingAppointments = [
        { id: 1, patient: "Patient B. Singh", time: "9:00 AM", date: "23rd Jan 2025", type: "Video Call" },
        { id: 2, patient: "Patient C. Reddy", time: "10:30 AM", date: "24th Jan 2025", type: "In-person" },
    ];

    const patientXCompliance = 75; // Idhu dhaan unga screenshot-la irukkura 75%

    // Function to navigate to patient details page using standard JS redirect
    const handleViewPatientDetails = (patientId) => {
        window.location.href = `/doctor/patient/${patientId}`; // <--- Normal JS redirect
    };

    // Function to navigate to patient records page using standard JS redirect
    const handleViewPatientRecords = () => {
        window.location.href = `/doctor/patients`; // <--- Normal JS redirect
    };

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
                    <span className="doctor-name">{doctorName}</span>
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
                        {/* Patient Records link-a click pannina, oru patient list or search page-kku pogum */}
                        <li onClick={handleViewPatientRecords}>Patient Records</li> {/* <--- Change made here */}
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
                        <ul>
                            {patients.filter(p => p.risk === "high").map(patient => (
                                <li key={patient.id}>
                                    {/* Patient name-a click pannum pothu patient details page-kku pogum */}
                                    <span 
                                        className={`patient-risk-${patient.risk} clickable-patient-name`} 
                                        onClick={() => handleViewPatientDetails(patient.id)}> {/* <--- Change made here */}
                                        • {patient.name}: {patient.alert}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="card-actions">
                            <button className="card-button">View All Alerts</button>
                            <button className="card-button secondary-button">Contact Team</button>
                        </div>
                    </div>

                    {/* Card 2: Overall Patient Health Trends */}
                    <div className="card health-trends-card">
                        <h3>Overall Patient Health Trends</h3>
                        <div className="trend-graph-placeholder">
                            <img src={healthGraph} alt="Health Trend Graph" />
                        </div>
                        <p className="trend-summary">Average Patient Health Index: <span className="decline-text">6.5% Decline</span></p>
                    </div>

                    {/* Card 3: Pending Actions / Consultations */}
                    <div className="card pending-actions-card">
                        <h3>Pending Actions / Consultations</h3>
                        <ul>
                            {pendingActions.map(action => (
                                <li key={action.id}>
                                    <span className={`action-status-${action.type}`}>• {action.task}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="card-button">View All Actions</button>
                    </div>

                    {/* Card 4: Recent Patient Activity */}
                    <div className="card patient-activity-card">
                        <h3>Recent Patient Activity</h3>
                        <div className="progress-circle-wrapper">
                            <div className="progress-circle">
                                <div className="progress-bar" style={{ '--p': patientXCompliance }}></div>
                                <div className="progress-text">{patientXCompliance}%</div>
                            </div>
                        </div>
                        <p>Patient X. Yadav: <span className="activity-detail">{patientXCompliance}% Compliance with Meds</span></p>
                        <button className="card-button">View Activity Log</button>
                    </div>

                    {/* Card 5: Latest Vital Readings */}
                    <div className="card vital-readings-card">
                        <h3>Latest Vital Readings</h3>
                        <ul>
                            {latestVitals.map(vital => (
                                <li key={vital.id}>
                                    {/* Patient name-a click pannum pothu patient details page-kku pogum */}
                                    <span 
                                        className="vital-patient-name clickable-patient-name" 
                                        onClick={() => handleViewPatientDetails(vital.id)}> {/* <--- Change made here */}
                                        {vital.patient}:
                                    </span> {vital.vital} - <span className={`vital-status-${vital.status.toLowerCase().includes('alert') ? 'alert' : 'normal'}`}>{vital.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 6: Upcoming Appointments */}
                    <div className="card appointments-card">
                        <h3>Upcoming Appointments</h3>
                        <ul>
                            {upcomingAppointments.map(app => (
                                <li key={app.id}>
                                    <span className="appointment-date">{app.date}:</span> {app.patient} - {app.time} ({app.type})
                                </li>
                            ))}
                        </ul>
                        <button className="card-button">Monthly View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;