/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/exams              ->  index
 * POST    /api/exams              ->  create
 * GET     /api/exams/:id          ->  show
 * GET     /api/exams/user/:id     ->  getExamList
 * PUT     /api/exams/:id          ->  update
 * DELETE  /api/exams/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Exam from './exam.model';
import Classroom from './../classroom/classroom.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.extend(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Exams
export function index(req, res) {
  return Exam.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}


export function getExamListForTeacher(req, res){
   return Exam.find({'authorid':req.params.id,'disconnect':false}).select({}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function getExamListForStudent(req, res){
   return Classroom.find({students:{ $elemMatch: { id: req.params.id } },'disconnect':false}).exec()
    .then((res)=>{
      let classRoomList = [];
      for(let i=0;i<res.length;i++){
        classRoomList.push(res[i]._id);
      }
      return Exam.find({'classRooms':{$in:classRoomList},'expiredate':{$gte:new Date()},'activationdate':{$lte:new Date()}}).select({}).exec().then(function(res){
        return res;
      }); 
    })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Exam from the DB
export function show(req, res) {
  return Exam.findOne({id:req.params.id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Exam in the DB
export function create(req, res) {
  return Exam.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Exam in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Exam.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Exam from the DB
export function destroy(req, res) {
  return Exam.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
