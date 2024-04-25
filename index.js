// app.js
const express = require('express');
const usersController = require('./controller/userController');

const app = express();

// Attach controller functions to routes
app.get('/users/:id', usersController.getUserById);

app.post('/send-email', usersController.sendMail);


const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});