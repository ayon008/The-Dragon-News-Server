const express = require('express');
const app = express();
const port = 3000;
const categories = require('./data/categories.json');
const cors = require('cors');
const news = require('./data/news.json')

app.use(cors());

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const find = news.find(n => n._id == id);
    res.send(find);
})


app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    }
    else {
        const filter = news.filter(n => n.category_id === id);
        res.send(filter);
    }
})


app.listen((port), console.log(port))