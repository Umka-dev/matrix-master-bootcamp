const express = require('express');

const app = express();
const PORT = 3300;

// to our app can understand json
app.use(express.json());

// routes
// home page
app.get('/', (req, res) => {
  res.send('I am in the home page');
});

// contact page
let users = [];
app.get('/contact', (req, res) => {
  res.send(users);
});

// add new user
app.post('/add-new-user', (req, res) => {
  users.push(req.body);
  res.send('User has been added');
});

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
