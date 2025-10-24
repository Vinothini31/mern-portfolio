const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact'); // ✅ Add this

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/contact', contactRoutes); // ✅ Use route here

// Start server
const PORT = process.env.PORT || 5000; 
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
