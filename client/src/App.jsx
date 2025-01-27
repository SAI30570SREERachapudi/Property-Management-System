import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home1 from './components/Home1';
import Tenants from './components/Tenants';

function App() {
  return (
    <Router>
      <Home1 />
      <Routes>
        <Route path="/" element={<h1>Welcome to Home Page</h1>} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/feedback" element={<h1>Feedback Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/register" element={<h1>Register Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
