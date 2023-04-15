// src/App.js

import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import AboutSection from './components/about/AboutSection';
import ContactSection from './components/contact/ContactSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <BrowserRouter>
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="" element={<UserProfile darkMode={darkMode} />} />
        <Route path="/about" element={<AboutSection darkMode={darkMode} />} />
        <Route path="/contact" element={<ContactSection darkMode={darkMode} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

