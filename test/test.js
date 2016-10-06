'use strict'

const app = require('../server');
const request = require('supertest')(app);
const config = require('../knexfile')[process.env.NODE_ENV];
const knex = require('knex')(config);
const expect = require('chai').expect;
const morgan = require('morgan');

describe('setup test/auto pass', function() {
    it('should pass the test', function() {
        expect(true).to.equal(true)
    })
});

// describe('Home', function() {
//     it('display home page', function(done) {
//         request.get('/')
//             .expect(200)
//             .end(function(err, res) {
//                 if (err) {
//                     done(err);
//                 }
//                 expect(res.text).to.contain("Hello")
//                 done();
//             })
//     })
// });
//
// describe('All Users', function() {
//     it('should display all of the users', function(done) {
//         request.get('/users')
//             .expect(200)
//             .end(function(err, res) {
//                 if (err) {
//                     done(err)
//                 } else {
//                     expect(res.text).to.contain("Users")
//                     done();
//                 }
//             })
//     });
//     it('should display a single user', function(done) {
//         request.get('/users/1')
//             .expect(200)
//             .end(function(err, res) {
//                 if (err) {
//                     done(err)
//                 }
//                 expect(res.text).to.contain("Your user page:")
//                 done();
//             })
//     })
// })
