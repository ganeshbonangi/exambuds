'use strict';

var express = require('express');
var controller = require('./exam.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/teacher/:id', controller.getExamListForTeacher);
router.get('/student/:id', controller.getExamListForStudent);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
