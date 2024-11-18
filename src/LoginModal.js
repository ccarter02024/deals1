// LoginModal.js
import React, { useState } from 'react';

const LoginModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message); // Show success message
        setFormData({ username: '', password: '' });
        closeModal(); // Close the modal on success
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to log in. Please try again.');
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div style={styles.overlay} onClick={handleBackgroundClick}>
      <div style={styles.modal}>
        <button onClick={closeModal} style={styles.closeButton}>X</button>
        <h1 style={styles.heading}>Login Here</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
          
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#1A1A1A',
    padding: '30px',
    borderRadius: '10px',
    position: 'relative',
    width: '350px',
    textAlign: 'center',
    boxShadow: '0 4px 30px rgba(0, 255, 255, 0.4)',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#FF6B6B'
  },
  heading: {
    color: '#00E0FF',
    fontSize: '24px',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    textShadow: '0 0 5px #00E0FF, 0 0 10px #00E0FF'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  label: {
    color: '#00E0FF',
    fontSize: '14px',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #00E0FF',
    backgroundColor: '#333',
    color: '#FFF',
    outline: 'none',
    boxShadow: '0 0 5px #00E0FF, inset 0 0 5px #00E0FF'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#00E0FF',
    color: '#1A1A1A',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 0 10px #00E0FF, 0 0 20px #00E0FF'
  }
};

export default LoginModal;