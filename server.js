'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')
const knex = require('knex')(config[environment]);

const bodyParser = require('body-parser');
const router = express.Router();
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieSession({
    secret: "alfred",
}))

router.get('/', function(req, res, next) {
    res.render('index')
})

app.listen(port, function() {
    console.log("listening on port: " + port);
})

module.exports = app;
