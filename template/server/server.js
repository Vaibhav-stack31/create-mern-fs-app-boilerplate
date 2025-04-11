require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// Replace 'ExampleModel' with your actual model file as needed

const ExampleModel = require('./models/ExampleModel')
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.info("MongoDB connected successfully"))
    .catch((error) => console.warn(`Error: ${error}`));

// Routes Placeholder
app.get('/example', (req, res) => {
    res.json({ message: 'GET request placeholder' });
});

app.post('/example', (req, res) => {
    res.json({ message: 'POST request placeholder' });
});

app.put('/example/:id', (req, res) => {
    res.json({ message: `PUT request placeholder for ID ${req.params.id}` });
});

app.delete('/example/:id', (req, res) => {
    res.json({ message: `DELETE request placeholder for ID ${req.params.id}` });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});