


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getLocalStorage, addLoginRecord } from '../../utils/LocalStorage';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setError('');

    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    const employees = getLocalStorage('employees') || [];
    const admin = getLocalStorage('admin');

    if (admin && email === admin.email && password === admin.password) {
      localStorage.setItem('currentUser', JSON.stringify(admin));
      addLoginRecord(admin.id);
      navigate('/admin-dashboard');
      return;
    }

    const employee = employees.find(emp => emp.email === email && emp.password === password);
    if (employee) {
      localStorage.setItem('currentUser', JSON.stringify(employee));
      addLoginRecord(employee.id);
      navigate('/employee-dashboard');
      return;
    }

    setError("Invalid email or password");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 text-primary">Welcome Back!</h3>
        {error && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="3"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <small className="text-muted">
            Don't have an account? <a href="/register" className="text-primary">Sign up</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;