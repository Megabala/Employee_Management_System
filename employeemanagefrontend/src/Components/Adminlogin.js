import React, { useState } from 'react';
import {Link} from "react-router-dom";
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f0f0f0',
  },
  loginCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  errorMessage: {
    color: '#ff0000',
    fontSize: '12px',
    marginTop: '-10px',
    marginBottom: '10px',
  },
};

function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMessage('Invalid email address.');
    } else if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
    } else {
      // Perform login actions here
      setErrorMessage('');
      // For demo purposes, we'll simply clear the inputs after a successful login attempt
      setEmail('');
      setPassword('');
    }
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
          <Link to="/home"><button type="submit" style={styles.button}>Login</button></Link>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
