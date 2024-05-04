import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // Clear previous errors
    setUsernameError('');
    setPasswordError('');

    // Validate username
    if (!username.trim()) {
      setUsernameError('Please enter a username');
      return;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError('Please enter a password');
      return;
    }

    // Perform login logic here...
    // Redirect to the create contact page upon successful login
    navigate('/contacts-list');
  };

  return (
    <div className="login-page bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 min-h-screen flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Log In</h2>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-200 font-bold mb-2">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {usernameError && <p className="text-red-500 mt-1">{usernameError}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-200 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {passwordError && <p className="text-red-500 mt-1">{passwordError}</p>}
        </div>
        <div className="flex items-center justify-center">
          <button onClick={handleLogin} className="bg-white text-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
