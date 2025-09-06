import React, { useState } from 'react';
import Landingpage from './authentication/landingpage/Landingpage';
import DoctorLogin from './authentication/doctor/DoctorLogin';
import PatientLogin from './authentication/patient/PatientLogin';
import DoctorSignup from './authentication/doctor/DoctorSignup'; // Import the new component

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false); // New state for signup
  const [userType, setUserType] = useState(null); // 'doctor' or 'patient'

  const handleLoginClick = (type) => {
    setShowLoginPage(true);
    setShowSignupPage(false);
    setUserType(type);
  };

  const handleSignupClick = () => { // New handler for signup
    setShowLoginPage(false);
    setShowSignupPage(true);
  };
  
  // Conditionally render the correct component
  if (showSignupPage) {
    if (userType === 'doctor') {
      return <DoctorSignup onLoginClick={handleLoginClick} />;
    } else if (userType === 'patient') {
      // Return PatientSignup here when you create it
    }
  }

  if (showLoginPage) {
    if (userType === 'doctor') {
      return <DoctorLogin onSignupClick={handleSignupClick} />; // Pass the new prop
    } else if (userType === 'patient') {
      return <PatientLogin />;
    }
  }

  return <Landingpage onLoginClick={handleLoginClick} />;
}

export default App;