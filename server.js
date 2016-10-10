'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const environment = process.env.NODE_ENV;
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);
const cookieSession = require('cookie-session')

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(methodOverride('_method'))

app.use(cookieSession({
    secret: 'alfred',
}));

const auth = require('./routes/auth');
const users = require('./routes/users');
const posts = require('./routes/posts');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('hello');
});

app.use('/auth', auth);
app.use('/users', users);
app.use('/posts', posts);

app.listen(PORT, function() {
    console.log('Hello from port:', PORT);
});

module.exports = app;
