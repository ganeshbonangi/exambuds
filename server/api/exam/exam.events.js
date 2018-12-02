/**
 * Exam model events
 */

'use strict';

import {EventEmitter} from 'events';
import Exam from './exam.model';
var ExamEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ExamEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Exam.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ExamEvents.emit(event + ':' + doc._id, doc);
    ExamEvents.emit(event, doc);
  }
}

export default ExamEvents;
