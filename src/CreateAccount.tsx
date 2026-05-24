import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ref, push, set } from 'firebase/database';
import { database } from './firebase.ts';

function CreateAccount() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string; gender?: string }>({});
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: { username?: string; email?: string; password?: string; gender?: string } = {};
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedUsername) {
      newErrors.username = 'Username is required';
    } else if (trimmedUsername.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!trimmedEmail) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!gender) {
      newErrors.gender = 'Please select your gender';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');

    if (!validate()) {
      setStatusMessage('Please fix the errors and try again.');
      return;
    }

    setIsLoading(true);

    try {
      const userRef = ref(database, 'users');
      const newUserRef = push(userRef);

      await set(newUserRef, {
        username: username.trim(),
        email: email.trim(),
        gender,
        createdAt: new Date().toISOString(),
      });

      navigate('/home');
    } catch (error) {
      console.error('Firebase signup error:', error);
      setStatusMessage('Unable to create account. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-account-page">
      <div className="create-account-card">
        <h2 className="create-account-title">Create Account</h2>
        <p className="create-account-subtitle">Sign up with your details to start sharing and connecting.</p>

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
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              autoComplete="username"
            />
            {errors.username && <span className="error-text">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              autoComplete="new-password"
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="form-group gender-group">
            <span className="form-label">Gender</span>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="radio-input"
                />
                Male
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="radio-input"
                />
                Female
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                  className="radio-input"
                />
                Other
              </label>
            </div>
            {errors.gender && <span className="error-text">{errors.gender}</span>}
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? (
                <span className="button-loading">
                  Signing up
                  <span className="loading-dots">
                    <span />
                    <span />
                    <span />
                  </span>
                </span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>

          {statusMessage && (
            <div className={`status-message ${Object.keys(errors).length ? 'status-error' : 'status-success'}`}>
              {statusMessage}
            </div>
          )}

          <p className="form-label" style={{ marginTop: '20px', fontWeight: 500 }}>
            Already have an account?{' '}
            <Link to="/" className="small-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
