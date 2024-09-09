import React, { useState } from 'react';

const AmazonQMidTest2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const handleLogin = () => {
    // Simulating a successful login
    setIsLoggedIn(true);
    setUserInfo({ name: 'John Doe', email: 'john@example.com' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo({ name: '', email: '' });
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>You're logged in</p>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AmazonQMidTest2;
