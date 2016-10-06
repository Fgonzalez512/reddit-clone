'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var config = require('./knexfile')[process.env.NODE_ENV];
var knex = require('knex')(config);

var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = express.Router();
var auth = require('./routes/users');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/', auth)

app.get('/posts', function(req, res, next) {
    if (req.cookies.loggedIn) {
        res.render('posts');
    } else {
        res.send(404)
    }
})

app.set('view engine', 'ejs');

app.listen(port, function() {
    console.log('hello from', port);
});

module.exports = app;
