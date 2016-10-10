'use strict';

const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const app = require('../server');
const config = require('../knexfile.js')['test'];
const knex = require('knex')(config);

const bcrypt = require('bcrypt-as-promised');

describe('setup test/auto pass', function() {
    it('should pass the test', function() {
        expect(true).to.equal(true)
    })
});

describe('main page', function() {
    it('should go to home page', function(done) {
        request(app).get('/')
            .expect(200)
            .end(function(err, res) {
                expect(err).to.equal(null);
                done();
            });
    });
});

describe('signup and auth', function() {
    it('find auth/signup', function(done) {
        request(app).get('/auth/signup')
            .expect(200)
            .end(function(err, res) {
                expect(err).to.equal(null);
                done();
            });
    });

    it('signup form', function(done) {
        request(app).get('/auth/signup')
            .expect(200)
            .end(function(err, res) {
                expect(res.text).to.include('<form method="POST" action="/auth/signup">');
                done();
            });
    });
});
