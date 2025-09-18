import React, { useState } from 'react';
import Landingpage from './authentication/landingpage/Landingpage';
import DoctorLogin from './authentication/doctor/DoctorLogin';
import PatientLogin from './authentication/patient/PatientLogin';
import DoctorSignup from './authentication/doctor/DoctorSignup';
import PatientSignup from './authentication/patient/patientSignup';
import DoctorDashboard from './dashboards/Doc/DoctorDashboard'; // Corrected path

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [userType, setUserType] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // <--- Idhai ippo thevaiyillai
  const [showDoctorDashboard, setShowDoctorDashboard] = useState(false); // <--- Pudhiya state: Doctor Dashboard-a kaattava?

  const handleLoginClick = (type) => {
    setShowLoginPage(true);
    setShowSignupPage(false);
    setUserType(type);
    setShowDoctorDashboard(false); // Make sure dashboard is hidden when going to login
  };

  const handleSignupClick = (type) => {
    setShowLoginPage(false);
    setShowSignupPage(true);
    setUserType(type);
    setShowDoctorDashboard(false); // Make sure dashboard is hidden when going to signup
  };

  const handleBackToLogin = (type) => {
    setShowLoginPage(true);
    setShowSignupPage(false);
    setUserType(type);
    setShowDoctorDashboard(false);
  };

  // <--- Pudhiya Function: DoctorLogin button click pannina udane idhu call aagum
  const handleDoctorLoginSuccess = () => {
    setShowDoctorDashboard(true); // Doctor Dashboard-a kaattu
    setShowLoginPage(false);     // Login page-a மறை
    setShowSignupPage(false);    // Signup page-a மறை
    setUserType(null);           // Reset user type
  };

  // --- CONDITIONAL RENDERING ---

  // 1. If Doctor Dashboard should be shown
  if (showDoctorDashboard) {
    return <DoctorDashboard />;
  }

  // 2. If not on dashboard, but on a signup page
  if (showSignupPage) {
    if (userType === 'doctor') {
      return <DoctorSignup onLoginClick={() => handleBackToLogin('doctor')} />;
    } else if (userType === 'patient') {
      return <PatientSignup onLoginClick={() => handleBackToLogin('patient')} />;
    }
  }

  // 3. If not on dashboard, but on a login page
  if (showLoginPage) {
    if (userType === 'doctor') {
      return <DoctorLogin onSignupClick={() => handleSignupClick('doctor')} onLoginSuccess={handleDoctorLoginSuccess} />; // <--- onLoginSuccess pass pannu
    } else if (userType === 'patient') {
      // For PatientLogin, if you want similar direct entry to patient dashboard,
      // you'll need a handlePatientLoginSuccess function too and update PatientLogin.js
      return <PatientLogin onSignupClick={() => handleSignupClick('patient')} /* onLoginSuccess={() => console.log('Patient Login Success')} */ />;
    }
  }

  // 4. Default: Show Landing Page
  return <Landingpage onLoginClick={handleLoginClick} />;
}

export default App;