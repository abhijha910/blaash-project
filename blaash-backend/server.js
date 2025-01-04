const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const layoutRoutes = require('./routes/layoutRoutes');

app.use(express.json());  // Middleware to parse JSON requests

// Register the routes for authentication and layout
app.use('/api/auth', authRoutes);  // Authentication-related routes
app.use('/api/layout', layoutRoutes);  // Layout-related routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
