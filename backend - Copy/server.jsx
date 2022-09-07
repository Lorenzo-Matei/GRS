// this creates a basic express server

require('dotenv').config();
const express = require("express");
const connectDB = require('./config/db.jsx')

connectDB(); // this runs the connection attempt function within db.jsx

const app = express(); // runs function express above.

//runs the method which grabs variable port from the process.env file.
const PORT = process.env.PORT || 5000; // this connect to environment port or use the 5000 port.

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));