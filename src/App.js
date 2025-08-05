import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminEmpLogin from "./components/Auth/AdminEmpLogin";
import AdminEmpRegister from "./components/Auth/AdminEmpRegister";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import HomePage from "./components/Auth/HomePage";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import AddTask from './components/TaskList/AddTask';
import ContactPage from './components/Auth/ContactPage';
import AboutPage from './components/Auth/AboutPage';
import Features from './components/pages/Features';
import Pricing from './components/pages/Pricing';
import SetLocalStorage from './utils/LocalStorage';
import './App.css';

function App() {
  // useEffect(() => {
  //   // Initialize localStorage with mock data
  //   SetLocalStorage.setMockData();
  // }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/login" element={<AdminEmpLogin />} />
          <Route path="/register" element={<AdminEmpRegister />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />  
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;