const express = require('express');

// initiliaze express app

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Response From Express')
});

app.get('/add', (req, res) => {
    res.send(' Add Response From Express')
});

app.get('/sub', (req, res) => {
    res.send('Sub Response From Express')
});

app.listen(port, () => {
    console.log('server started');
});