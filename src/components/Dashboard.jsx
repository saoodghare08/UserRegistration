// Dashboard
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/automatebuddy.png';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the Automate Buddy Dashboard!</h1>
        <img src={Image} alt="Automate Buddy" className="w-full h-auto rounded-lg mb-4 shadow-xl" />
        <p className="text-gray-600 mb-6">
          Manage your tasks and enhance your productivity with ease. Explore the features we offer!
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
