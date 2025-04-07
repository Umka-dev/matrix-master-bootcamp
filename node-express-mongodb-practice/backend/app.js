const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3300;

// to our app can understand json
app.use(express.json());

// use routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
