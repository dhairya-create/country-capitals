// Import required modules
const express = require('express');
const data = require('./data.json'); // Assuming your data is stored in a file named data.json
require('dotenv').config()

// Create an Express application
const app = express();

// Define routes
// Route to get the list of countries
app.get('/countries', (req, res) => {
    res.json(data);
});

// Route to get the number of countries with a limit
app.get('/countries/:limit', (req, res) => {
    const limit = parseInt(req.params.limit);
    const limitedData = data.slice(0, limit);
    res.json(limitedData);
});

// Start the server
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
