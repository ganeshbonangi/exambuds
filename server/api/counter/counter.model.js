'use strict';

import mongoose from 'mongoose';

var CounterSchema = new mongoose.Schema({
  sequence_value: Number,
  id: String
});

export default mongoose.model('Counter', CounterSchema);
