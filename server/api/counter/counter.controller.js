/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/counters              ->  index
 * POST    /api/counters              ->  create
 * GET     /api/counters/:id          ->  show
 * PUT     /api/counters/:id          ->  update
 * DELETE  /api/counters/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Counter from './counter.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
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

// Gets a list of Counters
export function index(req, res) {
  return Counter.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function getNextSequence(name) {
   var ret = Counter.findOneAndUpdate({
      query:{id:name},
      update:{$inc:{seq:1}},
      new: true
   }).exec();
   return ret.seq;
}
// Gets a single Counter from the DB
export function show(req, res) {
  return Counter.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Counter in the DB
export function create(req, res) {
  return Counter.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Counter in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Counter.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Counter from the DB
export function destroy(req, res) {
  return Counter.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
