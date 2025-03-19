const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
const port = 3000;
app.listen(port);

app.get('/', (req, res) => {
  //   res.send('<p>home page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  //   res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  // use method means - if no one previous paths have matched then use the 404 page by default (that is similar to catch block)
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
