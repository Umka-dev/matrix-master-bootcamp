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
  const blogs = [
    {
      title: 'Why do we use it?',
      snippet:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'What is Lorem Ipsum?',
      snippet:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Where does it come from?',
      snippet:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
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
