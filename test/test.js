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
})
