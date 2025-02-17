// Login Page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Get the array of registered users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Find user that matches the email and password
    const matchedUser = storedUsers.find(user => user.email === email && user.password === password);
  
    if (matchedUser) {
      alert('Login successful');
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-600 font-bold"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
