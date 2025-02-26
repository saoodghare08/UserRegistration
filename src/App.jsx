import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-300">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <Routes>
            <Route path="/UserRegistration/" element={<Home />} />
            <Route path="/UserRegistration/register" element={<Register />} />
            <Route path="/UserRegistration/login" element={<Login />} />
            <Route path="/UserRegistration/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
