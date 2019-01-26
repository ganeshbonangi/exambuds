/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/questions              ->  index
 * POST    /api/questions              ->  create
 * GET     /api/questions/:id          ->  show
 * PUT     /api/questions/:id          ->  update
 * DELETE  /api/questions/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
//import Question from './question.model';
import Counters from './../counter/counter.model';
import Comprehension from './comprehension.model';
import mongoose from 'mongoose';
 //import { isDate } from '@angular/common/src/i18n/format_date';
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
 function getValueForNextSequence(){
    return Counters.findOneAndUpdate(
           {id: 'questions_id' },
           {$inc:{sequence_value:1}}
    ).exec();
 }
// Gets a list of Questions
export function index(req, res) {
  return Question.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Question from the DB
export function show(req, res) {
  //  return Question.findOne({'id':req.params.id}).exec()
  //    .then(handleEntityNotFound(res))
  //    .then(respondWithResult(res))
  //    .catch(handleError(res));
  const id=req.params.id;
  Comprehension.findById(id) //what are you doing here??if we give question id it will display,iIN urlok, but we are working on create part right??yeswhere are you creating questions part in create method,you missed to create questions there .you created on ly  comprahesion
    .exec()
    .then(doc=>{
      console.log(doc);
      if(doc){
        res.status(200).json(doc);
      }
      else{
        res.status(404).json({message:'no valid question'});
      }
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({error:err});
    });
}

// Gets a single Question from the DB
export function getCategory(req, res) {
  return Question.find({'category':req.params.category}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
// Creates a new Question in the DB
export function create(req, res) {
  
  const comprehension={ 
     id:1234,
    instruction:"Read the passage and Answer the following questions",
    passage:"Exambuds is an online examination app where one can improve their aptitude and reasoning skills",
  
    questions:[{
      id: "5b1e3d20f43e050004036874",
      instruction: "క్రింది వాటిలో సరైన జవాబును ఎంచుకోండి.",
      information : "",
      questiontext : "<p dir=\"ltr\"><span style=\"font-size: 11pt;color: #000000;background-color: transparent;vertical-align: baseline;\"><span id=\"selectionBoundary_1528708004731_9065589392464699\" class=\"rangySelectionBoundary\">&#65279;</span>ఒక సంవత్సరం గాంధీ వర్ధంతి <span id=\"selectionBoundary_1528708064789_5724639981599045\" class=\"rangySelectionBoundary\">&#65279;</span> శనివారం <span id=\"selectionBoundary_1528708061080_08496968965330143\" class=\"rangySelectionBoundary\">&#65279;</span> అయిన అదే <span id=\"selectionBoundary_1528708057394_5808141990392537\" class=\"rangySelectionBoundary\">&#65279;</span> సంవత్సరంలో రిపబ్లిక్ డే  ఏ వారముగును?<span id=\"selectionBoundary_1528708002984_45328012285821573\" class=\"rangySelectionBoundary\">&#65279;</span></span></p>",
      explainaiton : "",
      type : "MCSS",
      category : "calender-TEL",
      options : [ 
          {
              "content" : "<p><span id=\"docs-internal-guid-4bd72ec9-ee1b-2ab6-d66f-1c12c19ee5dc\"><span style=\"font-size: 11pt;background-color: transparent;vertical-align: baseline;\"><b> </b>ఆదివారం  </span></span><br/></p>",
              "isAns" : true,
              "_id" : "5b1e3d20f43e050004036878"
          }, 
          {
              "content" : "<p><span id=\"docs-internal-guid-4bd72ec9-ee1b-2ab6-d66f-1c12c19ee5dc\"><span style=\"font-size: 11pt;background-color: transparent;vertical-align: baseline;\"><b>  </b>శనివారం </span></span><br/></p>",
              "isAns" : false,
              "_id" : ""
          }, 
          {
              "content" : "<p><span id=\"docs-internal-guid-4bd72ec9-ee1b-2ab6-d66f-1c12c19ee5dc\"><span style=\"font-size: 11pt;background-color: transparent;vertical-align: baseline;\">మంగళవారం </span></span><br/></p>",
              "isAns" : false,
              "_id" : "5b1e3d20f43e050004036876"
          }, 
          {
              "content" : "<p><span id=\"docs-internal-guid-92f8cfe7-ee1e-1853-8431-b66f74c0bc9f\"><span style=\"font-size: 11pt;background-color: transparent;vertical-align: baseline;\">శుక్ర వారం</span></span></p>",
              "isAns" : false,
              "_id" :"5b1e3d20f43e050004036875"
          }
      ],
      __v : 0
   }]
  
  };

  getQuestionIds(comprehension, 0, []);//this will create questions in questions collection and  keeps id for comprahansion
  
 }

function getQuestionIds(comprehension,i,ids){
  getValueForNextSequence().then((response)=>{//this is for generating id for the questions
    req.body.id = response._doc.sequence_value;
    return Question.create(comprehension.questions[i])//this is for question creation
    .then(function(res){
      ids[i] = res.id;
      if(i<comprehension.questions.length){
        getQuestionIds(comprehension,++i,ids);
      }else{
        return createComprahansive(comprehension, ids);
      }
    })
    .catch(handleError(res));
  });
}
function createComprahansive(comprehension, ids){
  Comprehension
  .save({
    id:1,
    instruction:'String',
    passage:'String',
    questions:[{type:'string',id:12}]
    }) //here object of comprahasive should pass to save
  .then(result=>{
     console.log(result);
     res.status(200).json({
       message:'handled!!!',
       createdComprehension:result
      });
   })
   .catch(err =>{
     console.log(err);
     res.status(500).json({
       error:err
     })
   })
}
// Updates an existing Question in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Question.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Question from the DB
export function destroy(req, res) {
  return Question.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
