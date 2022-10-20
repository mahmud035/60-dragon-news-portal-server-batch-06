const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

/* Importing the category.json file into the categories variable. */
const categories = require('./data/category.json');
/* Importing the news.json file into the news variable. */
const news = require('./data/news.json');

app.get('/', (req, res) => {
  res.send('News API Running');
});

/* This is a route that is used to get all the news categories. */
app.get('/news-categories', (req, res) => {
  res.send(categories);
});

/* This is a route that is used to get all the news items for a specific category. */
app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id === '08') {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === id);
    res.send(categoryNews);
  }
});

/* This is a route that is used to get all the news items. */
app.get('/news', (req, res) => {
  res.send(news);
});

/* This is a route that is used to get a single news item. */
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
  console.log(req.params.id);
});

app.listen(port, () => {
  console.log('Dragon News Server running on port ' + port);
});
