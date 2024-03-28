const express = require('express');

const postRouter = require('./router/postRouter'); // importing 

const cors = require('cors');

const app = express();
const port = 7000;

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/post' , postRouter);

app.get('/', (req, res) => {
    res.send('Response From Express')
});

app.get('/add', (req, res) => {
    res.send('Add Response From Express')
});

app.listen(port, () => {
    console.log('Server Started');
})