const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const urlRoutes = require('./routes/urlroutes');

dotenv.config(); // Load env variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB using DB_URI from .env
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', urlRoutes);

// Redirect handler
app.get('/:shortId', require('./routes/redirect'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
