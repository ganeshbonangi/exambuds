'use strict';

import mongoose from 'mongoose';

var ReportSchema = new mongoose.Schema({
	  examid: String,
	  userid: String,
	  duration: Date,
	  username: String,
	  total:Number,
	  corrects:Number,
	  wrongs: Number
});

export default mongoose.model('Report', ReportSchema);
