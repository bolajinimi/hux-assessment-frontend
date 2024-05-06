import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [backendError, setBackendError] = useState('');

  const handleLogin = async () => {
    // Clear previous errors
    setUsernameError('');
    setPasswordError('');
    setBackendError('');
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

    try {
        // Make a POST request using Axios
        const response = await axios.post('http://localhost:3008/user/login', {
          username,
          password,
        });
  
        // Check if the response is successful
        if (response.status === 200) {
          setUsername('');
          setPassword('');
          // After successful signup, navigate to the login page
          localStorage.setItem("token",response.data.token)
          navigate('/contacts-list');
        } else {
          throw new Error('Signup failed');
        }
      } catch (error) {
        console.error('Error during signup:', error);
        // Handle error appropriately, e.g., show error message to the user
        if (error.response && error.response.data && error.response.data.message) {
          setBackendError(error.response.data.message);
        } else {
          setBackendError('An error occurred. Please try again later.');
        }
      }
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
