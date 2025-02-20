// Registration Page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // useState hook used to get updated value from form filling
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create user object from form inputs
    const user = { name, email, password };
  
    // Get existing users from local storage or initialize as an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add new user to the array
    existingUsers.push(user);
  
    // Save updated users array to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    // Pop up on successful registration
    alert('Registration successful');
  
    // Redirect to home after signup
    navigate('/');
  };
  

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Register</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
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
            Register
          </button>
          <button
            onClick={() => navigate('/UserRegistration/')}
            className="text-blue-500 hover:text-blue-600 font-bold"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
