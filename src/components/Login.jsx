import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './components.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(username.trim(), password);
    if (res.ok) {
      navigate(from, { replace: true });
    } else {
      setError(res.message || 'Login failed');
    }
  };

  return (
    <div className="container login-page">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username
          <input value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        {error && <div className="form-error">{error}</div>}
        <button type="submit" className="btn">Sign in</button>
      </form>

      <div className="help-text">
        Sample accounts (seeded):
        <ul>
          <li>alice / password1</li>
          <li>bob / password2</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
