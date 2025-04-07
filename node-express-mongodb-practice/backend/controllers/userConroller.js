// Function to GET and show the home page
const getHomePage = (req, res) => {
  res.send(`<h1>Home page</h1>`);
};

// Function to GET and show all users
let users = [];
const getAllUsers = (req, res) => {
  res.send(users);
};

// Function to add/POST new user to the users array
const addNewUser = (req, res) => {
  if (req.body.age < 20) {
    res.status(403).send('Sorry your age should be more than 20');
  } else {
    users.push(req.body);
    res.send('User has been added');
  }
};

module.exports = {
  getHomePage,
  getAllUsers,
  addNewUser,
};
