// Home page that navigates to login and registration pages
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/automatebuddy.png';

const Home = () => {
  // useNavigate hook used to navigate between routes
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={Image} alt="" />
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Welcome to Automate Buddy
      </h1>
      <div className="space-x-4">
        <button 
          onClick={() => navigate('/login')} 
          className="px-6 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <button 
          onClick={() => navigate('/register')} 
          className="px-6 py-2 text-white bg-green-500 rounded-md shadow hover:bg-green-600 transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
