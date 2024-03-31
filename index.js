const express = require('express');

const userRouter = require('./router/userRouter'); // importing 
const postRouter = require('./router/postRouter');



const cors = require('cors');

const app = express();
const port = 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/post', postRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Response From Express')
});

app.get('/add', (req, res) => {
    res.send('Add Response From Express')
});

app.listen(port, () => {
    console.log('Server Started');
})