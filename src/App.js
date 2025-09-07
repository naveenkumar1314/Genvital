import React, { useState } from 'react';
import Landingpage from './authentication/landingpage/Landingpage';
import DoctorLogin from './authentication/doctor/DoctorLogin';
import PatientLogin from './authentication/patient/PatientLogin';
import DoctorSignup from './authentication/doctor/DoctorSignup';
import PatientSignup from './authentication/patient/patientSignup';

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [userType, setUserType] = useState(null);

  const handleLoginClick = (type) => {
    setShowLoginPage(true);
    setShowSignupPage(false);
    setUserType(type);
  };

  const handleSignupClick = (type) => {
    setShowLoginPage(false);
    setShowSignupPage(true);
    setUserType(type);
  };

  const handleBackToLogin = (type) => {
    setShowLoginPage(true);
    setShowSignupPage(false);
    setUserType(type);
  };

  // Conditionally render the correct component
  if (showSignupPage) {
    if (userType === 'doctor') {
      return <DoctorSignup onLoginClick={handleBackToLogin} />;
    } else if (userType === 'patient') {
      return <PatientSignup onLoginClick={handleBackToLogin} />;
    }
  }

  if (showLoginPage) {
    if (userType === 'doctor') {
      return <DoctorLogin onSignupClick={() => handleSignupClick('doctor')} />;
    } else if (userType === 'patient') {
      return <PatientLogin onSignupClick={() => handleSignupClick('patient')} />;
    }
  }

  return <Landingpage onLoginClick={handleLoginClick} />;
}

export default App;