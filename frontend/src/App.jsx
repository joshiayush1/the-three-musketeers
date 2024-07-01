import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import Models from './modelss/Model.jsx';
import Abouts from './about/About.jsx';
import Login from './login/Login.jsx';
import History from './history/History.jsx';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './context/ProtetctedRoute.jsx'; // Assuming ProtectedRoute is correctly implemented

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<ProtectedRoute Component={Models} />} />
        <Route path="/history" element={<ProtectedRoute Component={History} />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
