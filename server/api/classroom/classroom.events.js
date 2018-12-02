/**
 * Classroom model events
 */

'use strict';

import {EventEmitter} from 'events';
import Classroom from './classroom.model';
var ClassroomEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ClassroomEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Classroom.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ClassroomEvents.emit(event + ':' + doc._id, doc);
    ClassroomEvents.emit(event, doc);
  }
}

export default ClassroomEvents;
