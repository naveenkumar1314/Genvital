// src/dashboards/Doc/DoctorDashboard.js

import React, { useEffect, useState } from 'react';
import './DoctorDashboard.css';

// --- Firebase Realtime Database Imports ---
import { getDatabase, ref, onValue } from "firebase/database"; // Realtime Database specific imports
import { app } from '../../firebaseConfig'; // Import the initialized Firebase app

// --- LOCAL ASSETS IMPORTS ---
import healthGraph from '../../assets/health_trend_graph.png';
import doctorProfilePic from '../../assets/doctor_profile.png';


const DoctorDashboard = () => {
    // --- State variables for Real-time Vitals ---
    const [liveHeartRate, setLiveHeartRate] = useState('N/A');
    const [liveTemperature, setLiveTemperature] = useState('N/A');
    const [vitalsLoading, setVitalsLoading] = useState(true);
    const [vitalsError, setVitalsError] = useState(null);

    // --- Dummy data for other parts of the dashboard (as per your request) ---
    const doctorName = "Dr. Priya Vijayan";
    const patients = [
        { id: 'p1', name: "Patient A. Kumar", status: "Critical Alert", alert: "ECG Irregularity", risk: "high" },
        { id: 'p2', name: "Patient B. Singh", status: "Elevated BP Detected", alert: "Blood Pressure High", risk: "moderate" },
        { id: 'p3', name: "Patient C. Reddy", status: "Oxygen Saturation Low", alert: "SpO2 Below Normal", risk: "high" },
        { id: 'p4', name: "Patient D. Sharma", status: "Stable", alert: "No New Issues", risk: "low" },
    ];
    const pendingActions = [
        { id: 1, task: "Review Recent ECG for Patient A. Kumar", status: "Urgent", type: "red" },
        { id: 2, task: "Follow-up Call with Patient B. Singh", status: "Pending", type: "yellow" },
        { id: 3, task: "Approve New Patient Request (Patient E. Khan)", status: "New", type: "green" },
    ];
    // This will now combine live vitals with dummy SpO2 and other patient details
    // We will dynamically create this array
    const upcomingAppointments = [
        { id: 1, patient: "Patient B. Singh", time: "9:00 AM", date: "23rd Jan 2025", type: "Video Call" },
        { id: 2, patient: "Patient C. Reddy", time: "10:30 AM", date: "24th Jan 2025", type: "In-person" },
    ];
    const patientXCompliance = 75; // Dummy compliance value

    // --- useEffect to listen to Firebase Realtime Database ---
    useEffect(() => {
        const database = getDatabase(app); // Get Realtime Database instance from our initialized app
        // Reference to the 'Patient' node in Realtime Database
        const patientRef = ref(database, 'Patient'); // This is the path from your screenshot

        // Set up the real-time listener for changes at the 'Patient' node
        const unsubscribe = onValue(patientRef, (snapshot) => {
            const data = snapshot.val(); // Get the JSON data from the snapshot

            if (data) {
                // Update state with live data
                setLiveHeartRate(data.ECG_Raw !== undefined ? `${data.ECG_Raw} BPM` : 'N/A');
                setLiveTemperature(data.Temperature_C !== undefined ? `${data.Temperature_C}°C` : 'N/A');
                // ECG_Status can also be used if needed
                setVitalsLoading(false);
            } else {
                // If data is null (node doesn't exist or is empty)
                setVitalsError("No live patient data available.");
                setVitalsLoading(false);
                setLiveHeartRate('N/A');
                setLiveTemperature('N/A');
            }
        }, (err) => {
            // Handle errors during real-time listening
            console.error("Error fetching real-time vitals from RTDB: ", err);
            setVitalsError("Failed to load real-time vitals.");
            setVitalsLoading(false);
            setLiveHeartRate('N/A');
            setLiveTemperature('N/A');
        });

        // Cleanup the listener when the component unmounts
        return () => unsubscribe();
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount


    // Dynamically create latestVitals array combining live and dummy data
    const latestVitals = [
        { id: 1, patient: "Patient Y. Gupta", vital: "Heart Rate", value: liveHeartRate, status: vitalsLoading ? "Loading..." : (vitalsError ? "Error" : "Live") },
        { id: 2, patient: "Patient Z. Patel", vital: "SpO2", value: "95%", status: "Normal" }, // Dummy SpO2
        { id: 3, patient: "Patient A. Kumar", vital: "Temperature", value: liveTemperature, status: vitalsLoading ? "Loading..." : (vitalsError ? "Error" : "Live") },
    ];


    // Function to navigate to patient details page using standard JS redirect
    const handleViewPatientDetails = (patientId) => {
        // In a real app, you'd use React Router: navigate(`/doctor/patient/${patientId}`);
        window.location.href = `/doctor/patient/${patientId}`;
    };

    // Function to navigate to patient records page using standard JS redirect
    const handleViewPatientRecords = () => {
        // In a real app, you'd use React Router: navigate(`/doctor/patients`);
        window.location.href = `/doctor/patients`;
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
                        <li onClick={handleViewPatientRecords}>Patient Records</li>
                        <li>Health Analytics</li>
                        <li>Appointments</li>
                        <li>Alerts</li>
                        <li>Settings</li>
                    </ul>
                </div>

                {/* Dashboard Cards Area */}
                <div className="dashboard-cards-area">
                    {/* Card 1: High-Risk Patients (Still uses dummy data) */}
                    <div className="card high-risk-patients-card">
                        <h3>High-Risk Patients</h3>
                        <ul>
                            {patients.filter(p => p.risk === "high").map(patient => (
                                <li key={patient.id}>
                                    <span
                                        className={`patient-risk-${patient.risk} clickable-patient-name`}
                                        onClick={() => handleViewPatientDetails(patient.id)}>
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

                    {/* Card 3: Pending Actions / Consultations (Still uses dummy data) */}
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

                    {/* Card 4: Recent Patient Activity (Still uses dummy data) */}
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

                    {/* Card 5: Latest Vital Readings (Now with REAL-TIME Heart Rate and Temperature, Dummy SpO2) */}
                    <div className="card vital-readings-card">
                        <h3>Latest Vital Readings</h3>
                        {vitalsLoading && <p>Loading live vitals...</p>}
                        {vitalsError && <p style={{ color: 'red' }}>Error: {vitalsError}</p>}
                        {!vitalsLoading && !vitalsError && (
                            <ul>
                                {latestVitals.map(vital => (
                                    <li key={vital.id}>
                                        <span
                                            className="vital-patient-name clickable-patient-name"
                                            onClick={() => handleViewPatientDetails(vital.id)}>
                                            {vital.patient}:
                                        </span> {vital.vital} - <span className={`vital-status-${vital.status.toLowerCase().includes('alert') ? 'alert' : 'normal'}`}>{vital.value}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Card 6: Upcoming Appointments (Still uses dummy data) */}
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