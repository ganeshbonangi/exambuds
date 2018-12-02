'use strict';

import mongoose from 'mongoose';

var DropdownSchema = new mongoose.Schema({
  id: Number,
  questiontext: String,
  uploadedby: String,
  uploadeddate:{ type: Date, default: Date.now },
  explainaiton: [{text:String}],
  category: String,
  options: [{
  	content:String,
    isAns:Boolean
  }]
});

export default mongoose.model('Dropdown', DropdownSchema);
