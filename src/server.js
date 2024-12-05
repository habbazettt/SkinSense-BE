const express = require("express");
const cors = require("cors");
require('dotenv').config()
const cookieParser = require('cookie-parser');
const loadModel = require('./services/loadModel');
// const swaggerUi = require('swagger-ui-express');

const app = express();

// loadModel();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// test server
app.get("/", (req, res) => {
    res.send("Server is running");
})

// Handle routes users
const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
