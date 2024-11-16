const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can change this to any port you prefer

// Middleware
app.use(cors()); // Allows cross-origin requests from your React app
app.use(express.json()); // Parses incoming JSON requests

mongoose.connect('mongodb://localhost:27017/users1')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

const User = require('./models/User'); // Import the model

// POST request to add a new user
app.post('/api/users', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// GET route for fetching users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from MongoDB
    res.json(users); // Respond with the users as JSON
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});