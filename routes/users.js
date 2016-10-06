'use strict';
const express = require('express');
const router = express.Router();
const config = require('../knexfile')[process.env.NODE_ENV];
const knex = require('knex')(config);
const bcrypt = require('bcrypt');


router.get('/', function(req, res, next) {
    res.render('index')
});

router.get('/posts', function(req, res, next) {
    res.render('posts/posts')
})

router.get('/signup', function(req, res, next) {
    if (req.cookies.loggedIn) {
        res.send('Already logged in.')
    } else {
        res.render('signup')
    }
})

router.get('/login', function(req, res, next) {
    res.render('login')
})

router.post('/signup', function(req, res, next) {

    knex('users').where({
        email: req.body.email
    }).first().then(function(user, err) {
        if (!user) {
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                knex('users').insert({
                    email: req.body.email,
                    hashed_password: hash,
                    admin: req.body.admin,
                    username: req.body.username,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name
                }).then(function() {
                    res.redirect('/posts');
                });
            });
        } else {
            res.redirect('signup');
        }
    });

});

router.post('/login', function(req, res, next) {
    knex('users').where({
        email: req.body.email,
    }).first().then(function(user) {
        if (!user) {
            res.send('Unauthorized User')
        } else {
            bcrypt.compare(req.body.password, user.hashed_password, function(err, result) {
                if (user && result === true) {
                    res.cookie('loggedIn', true);
                    res.redirect('/posts');
                } else {
                    res.redirect('login');
                }
            });
        }
    });

});

router.get('/logout', function(req, res) {
    res.clearCookie('loggedIn');
    res.redirect('/');
});



module.exports = router;
