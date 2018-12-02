/**
 * report model events
 */

'use strict';

import {EventEmitter} from 'events';
import report from './report.model';
var reportEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
reportEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  report.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    reportEvents.emit(event + ':' + doc._id, doc);
    reportEvents.emit(event, doc);
  }
}

export default reportEvents;
