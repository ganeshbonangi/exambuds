'use strict';

var app = require('../..');
import request from 'supertest';

var newOption;

describe('Option API:', function() {

  describe('GET /api/options', function() {
    var options;

    beforeEach(function(done) {
      request(app)
        .get('/api/options')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          options = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(options).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/options', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/options')
        .send({
          name: 'New Option',
          info: 'This is the brand new option!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOption = res.body;
          done();
        });
    });

    it('should respond with the newly created option', function() {
      expect(newOption.name).to.equal('New Option');
      expect(newOption.info).to.equal('This is the brand new option!!!');
    });

  });

  describe('GET /api/options/:id', function() {
    var option;

    beforeEach(function(done) {
      request(app)
        .get('/api/options/' + newOption._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          option = res.body;
          done();
        });
    });

    afterEach(function() {
      option = {};
    });

    it('should respond with the requested option', function() {
      expect(option.name).to.equal('New Option');
      expect(option.info).to.equal('This is the brand new option!!!');
    });

  });

  describe('PUT /api/options/:id', function() {
    var updatedOption;

    beforeEach(function(done) {
      request(app)
        .put('/api/options/' + newOption._id)
        .send({
          name: 'Updated Option',
          info: 'This is the updated option!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOption = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOption = {};
    });

    it('should respond with the updated option', function() {
      expect(updatedOption.name).to.equal('Updated Option');
      expect(updatedOption.info).to.equal('This is the updated option!!!');
    });

  });

  describe('DELETE /api/options/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/options/' + newOption._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when option does not exist', function(done) {
      request(app)
        .delete('/api/options/' + newOption._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
