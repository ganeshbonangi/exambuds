/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/reports              ->  index
 * POST    /api/reports              ->  create
 * GET     /api/reports/:id          ->  show
 * PUT     /api/reports/:id          ->  update
 * DELETE  /api/reports/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Report from './report.model';

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
        console.log('saveUpdates updated');
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


export function getreportList(req, res) {
  return Report.find({'admin': req.params.id,'disconnect':false}).select({ 'admin': 0}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//Gets filtered class room list

export function getFilteredreportList(req, res) {
  return Report.find({'disconnect':false,'name':{'$regex':req.body.name,'$options':'i'}}).select({ 'admin': 0}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a list of Reports
export function index(req, res) {
  return Report.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Report from the DB
export function show(req, res) {
  return Report.find({'examid':req.params.id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Report in the DB
export function create(req, res) {
  return Report.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Report in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Report.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Report from the DB
export function destroy(req, res) {
  return Report.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
