import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const newErrors: { username?: string; password?: string } = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    } else if (username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage('');

    if (validate()) {
      setStatusMessage('Login successful. Welcome back!');
      setErrors({});
    } else {
      setStatusMessage('Please fix the errors and try again.');
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (errors.username) {
      setErrors((prev) => ({ ...prev, username: undefined }));
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  };

  return (
    <div className="login-page">
      <div className="signup-card">
        <h3 className="signup-title">New here?</h3>
        <p className="signup-text">Create an account to join our community, follow your interests, and stay connected.</p>
        <Link to="/signup" className="create-account-button">
          Create account
        </Link>
      </div>
      
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Enter your username and password to continue.</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className={`form-input ${errors.username ? 'input-error' : ''}`}
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
              autoComplete="username"
            />
            {errors.username && <span className="error-text">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className={`form-input ${errors.password ? 'input-error' : ''}`}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button">
              Login
            </button>
            <a href="#" className="forgot-password" onClick={(e) => e.preventDefault()}>
              Forgot password?
            </a>
          </div>

          {statusMessage && (
            <div className={`status-message ${Object.keys(errors).length ? 'status-error' : 'status-success'}`}>
              {statusMessage}
            </div>
          )}
        </form>
      </div>

      
    </div>
  );
}

export default Login;