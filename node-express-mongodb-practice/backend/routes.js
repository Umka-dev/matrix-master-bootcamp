const express = require('express');
const route = express.Router();
const {
  getHomePage,
  getAllUsers,
  addNewUser,
} = require('./controllers/userConroller');

// Home page
route.get('/', getHomePage);

// Users page
route.get('/users', getAllUsers);

// Sign Up page
route.post('/add-new-user', addNewUser);

// Get and display the request params on the page as a variable
// route.get('/:parameter', (req, res) => {
//   res.send(`<h1>Hello ${req.params.parameter}</h1>`);
// });

module.exports = route;
