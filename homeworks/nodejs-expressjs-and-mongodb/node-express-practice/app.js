require('dotenv').config(); // to use .env file
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blogModel');

// express app
const app = express();

// connect to MongoDB
const DB_URI = process.env.MONGO_URI; // connect DB URI through the .env
if (!DB_URI) {
  console.error('❌ MongoDB URI is missing! Check your .env file.');
  process.exit(1);
}
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('✅ DB is connected');
    // listen for request
    const port = 3000;
    app.listen(port, () =>
      console.log(`Server is running on http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.log('❌ MongoDB connection error: ', err);
  });

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog',
    body: 'more about my new blog',
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get('/single-blog', (req, res) => {
  Blog.findById('67dc587ae2515655bec01664')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// routes
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
