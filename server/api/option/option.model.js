'use strict';

import mongoose from 'mongoose';

var OptionSchema = new mongoose.Schema({
  id: Number,
  optiontext: String,
  isanswer: Boolean
});

export default mongoose.model('Option', OptionSchema);
