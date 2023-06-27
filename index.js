const express = require('express');
const config = require('config');
const app = express();
const port = config.get('app.port');
const host = 'localhost';

const guestsRouter = require('./routes/guests');
const usersRouter = require('./routes/users');
const githubRouter = require('./routes/github');

const errorHandler = require('./middlewares/error');
const notFound = require('./middlewares/notFound');

app.get('/', (req, res) => {
    res.send("Main page")
});

app.use(express.urlencoded( { extended: false } ));

app.use('/', guestsRouter);
app.use('/users', usersRouter);
app.use('/github', githubRouter);

// app.use(errorHandler);
app.use(notFound);

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
});
