import React, { useState, useEffect } from 'react';

const UserForm = ({ selectedUser, refreshUsers }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  // Populate form fields if editing a user
  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name,
        email: selectedUser.email,
        age: selectedUser.age,
      });
    } else {
      setFormData({ name: '', email: '', age: '' });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        selectedUser ? `http://localhost:5000/api/users/${selectedUser._id}` : 'http://localhost:5000/api/users',
        {
          method: selectedUser ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to save user');
      }

      const result = await response.json();
      alert(selectedUser ? `User updated: ${result.name}` : `User created: ${result.name}`);
      refreshUsers(); // Refresh the user list after the action
      setFormData({ name: '', email: '', age: '' });
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedUser ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <button type="submit">{selectedUser ? 'Update User' : 'Create User'}</button>
    </form>
  );
};

export default UserForm;