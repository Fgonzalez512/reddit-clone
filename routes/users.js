'use strict'

const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')
const knex = require('knex')(config[environment]);
const bcrypt = require('bcrypt');
const flash = require('flash');

router.get('/', function(req, res) {
    res.render('users/allUsers')
})


module.exports = router;
