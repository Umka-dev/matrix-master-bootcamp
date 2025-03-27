const express = require('express');

const app = express();
const PORT = 3300;

// to our app can understand json
app.use(express.json());

// routes
// home page

app.get('/', (req, res) => {
  console.log(req.params);
  res.send(`<h1>Home page</h1>`);
});

// Get and display the request params on the page as a variable
app.get('/:parameter', (req, res) => {
  console.log(req.params);
  res.send(`<h1>Hello ${req.params.parameter}</h1>`);
});

// contact page
let users = [];
app.get('/users', (req, res) => {
  res.send(users);
});

// add new user
app.post('/add-new-user', (req, res) => {
  users.push(req.body);
  res.send('User has been added');
});

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
