'use strict';

var app = require('../..');
import request from 'supertest';

var newClassroom;

describe('Classroom API:', function() {

  describe('GET /api/classrooms', function() {
    var classrooms;

    beforeEach(function(done) {
      request(app)
        .get('/api/classrooms')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          classrooms = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(classrooms).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/classrooms', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/classrooms')
        .send({
          name: 'New Classroom',
          info: 'This is the brand new classroom!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newClassroom = res.body;
          done();
        });
    });

    it('should respond with the newly created classroom', function() {
      expect(newClassroom.name).to.equal('New Classroom');
      expect(newClassroom.info).to.equal('This is the brand new classroom!!!');
    });

  });

  describe('GET /api/classrooms/:id', function() {
    var classroom;

    beforeEach(function(done) {
      request(app)
        .get('/api/classrooms/' + newClassroom._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          classroom = res.body;
          done();
        });
    });

    afterEach(function() {
      classroom = {};
    });

    it('should respond with the requested classroom', function() {
      expect(classroom.name).to.equal('New Classroom');
      expect(classroom.info).to.equal('This is the brand new classroom!!!');
    });

  });

  describe('PUT /api/classrooms/:id', function() {
    var updatedClassroom;

    beforeEach(function(done) {
      request(app)
        .put('/api/classrooms/' + newClassroom._id)
        .send({
          name: 'Updated Classroom',
          info: 'This is the updated classroom!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedClassroom = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedClassroom = {};
    });

    it('should respond with the updated classroom', function() {
      expect(updatedClassroom.name).to.equal('Updated Classroom');
      expect(updatedClassroom.info).to.equal('This is the updated classroom!!!');
    });

  });

  describe('DELETE /api/classrooms/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/classrooms/' + newClassroom._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when classroom does not exist', function(done) {
      request(app)
        .delete('/api/classrooms/' + newClassroom._id)
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
