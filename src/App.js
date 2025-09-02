import React, { useState } from 'react'; 
import Landingpage from './landingpage/Landingpage';
import Login from './authentication/login/login';
import Signup from './authentication/signup/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Pudhiya state: first login page varum

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handlePageChange = () => {
    setIsLogin(!isLogin); // Pudhiya function: Login page-a Signup-kku maathum
  };
  

  if (!isLoggedIn) {
    if (isLogin) {
      // isLogin true-na Login component-a kaattu
      return <Login onLogin={handleLogin} onPageChange={handlePageChange} />;
    } else {
      // isLogin false-na Signup component-a kaattu
      return <Signup onPageChange={handlePageChange} />;
    }
  }

  return (
    <div>
      <Landingpage />
    </div>
  );
}

export default App;