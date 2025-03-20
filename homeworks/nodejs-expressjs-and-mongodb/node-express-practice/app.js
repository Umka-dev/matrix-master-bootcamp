require('dotenv').config(); // to use .env file
const express = require('express');
const mongoose = require('mongoose');

const blogRouts = require('./routes/blogRouts');

const { render } = require('ejs');

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
app.use(express.urlencoded({ extended: true })); // the middleware to use POST request, it takes all the URL encoded data and passes it to the request object

// routes
app.get('/', (req, res) => {
  // res.render('index', { title: 'Home', blogs });
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRouts);

// 404 page
app.use((req, res) => {
  // use method means - if no one previous paths have matched then use the 404 page by default (that is similar to catch block)
  res.status(404).render('404', { title: '404' });
});
