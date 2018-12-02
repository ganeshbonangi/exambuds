'use strict';

import mongoose from 'mongoose';

var QuestionSchema = new mongoose.Schema({
  id: Number,
  information: String,
  instruction: String,
  questiontext: String,
  type: String,
  uploadedby: String,
  uploadeddate:{ type: Date, default: Date.now },
  explainaiton: [{text:String}],
  category: String,
  options: [{
  	content:String,
    isAns:Boolean
  }]
});

export default mongoose.model('Question', QuestionSchema);