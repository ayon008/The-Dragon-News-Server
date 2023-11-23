const express = require('express');
const app = express();
const port = 3000;
const categories = require('./data/categories.json');
const cors = require('cors');

app.use(cors());

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen((port), console.log(port))