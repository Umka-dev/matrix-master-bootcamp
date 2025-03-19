const express = require('express');
const { title } = require('process');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'my-views'); // in order to use other configuration with the different folder name for 'views'

// listen for request
const port = 3000;
app.listen(port);

app.get('/', (req, res) => {
  //   res.send('<p>home page</p>');
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  //   res.send('<p>about page</p>');
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a New Blog' });
});

// 404 page
app.use((req, res) => {
  // use method means - if no one previous paths have matched then use the 404 page by default (that is similar to catch block)
  res.status(404).render('404', { title: '404' });
});
