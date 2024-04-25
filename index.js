// app.js
const express = require('express');
const usersController = require('./controller/userController');
const mailController = require('./controller/mailController');
const saveFileController = require('./controller/saveFileController');

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
// Attach controller functions to routes
app.get('/users/:id', usersController.getUserById);
app.post('/send-email', mailController.sendMail);
app.post('/save-file', saveFileController.saveFile);

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});