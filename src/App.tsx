import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    if (!isLoggedIn) {
      // Simulating login and setting name and email
      setName('John Doe');
      setEmail('johndoe@example.com');
    } else {
      // Clearing name and email on logout
      setName('');
      setEmail('');
    }
  };

  return (
    <>
      <button
        onClick={handleLoginToggle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      {isLoggedIn ? (
        <>
          <p className="text-green-500">ログイン中</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </>
      ) : (
        <p className="text-red-500">ログアウトしています</p>
      )}
      {!isLoggedIn && <p>ログインしてください</p>}
    </>
  );
}

export default App;
