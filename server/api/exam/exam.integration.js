'use strict';

var app = require('../..');
import request from 'supertest';

var newExam;

describe('Exam API:', function() {

  describe('GET /api/exams', function() {
    var exams;

    beforeEach(function(done) {
      request(app)
        .get('/api/exams')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          exams = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(exams).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/exams', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/exams')
        .send({
          name: 'New Exam',
          info: 'This is the brand new exam!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newExam = res.body;
          done();
        });
    });

    it('should respond with the newly created exam', function() {
      expect(newExam.name).to.equal('New Exam');
      expect(newExam.info).to.equal('This is the brand new exam!!!');
    });

  });

  describe('GET /api/exams/:id', function() {
    var exam;

    beforeEach(function(done) {
      request(app)
        .get('/api/exams/' + newExam._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          exam = res.body;
          done();
        });
    });

    afterEach(function() {
      exam = {};
    });

    it('should respond with the requested exam', function() {
      expect(exam.name).to.equal('New Exam');
      expect(exam.info).to.equal('This is the brand new exam!!!');
    });

  });

  describe('PUT /api/exams/:id', function() {
    var updatedExam;

    beforeEach(function(done) {
      request(app)
        .put('/api/exams/' + newExam._id)
        .send({
          name: 'Updated Exam',
          info: 'This is the updated exam!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedExam = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedExam = {};
    });

    it('should respond with the updated exam', function() {
      expect(updatedExam.name).to.equal('Updated Exam');
      expect(updatedExam.info).to.equal('This is the updated exam!!!');
    });

  });

  describe('DELETE /api/exams/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/exams/' + newExam._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when exam does not exist', function(done) {
      request(app)
        .delete('/api/exams/' + newExam._id)
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
