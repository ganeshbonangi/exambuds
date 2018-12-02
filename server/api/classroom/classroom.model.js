'use strict';

import mongoose from 'mongoose';

var ClassroomSchema = new mongoose.Schema({
  name: String,
  admin: String,
  disconnect:{type:Boolean,default:false},
  students: Array
});

export default mongoose.model('Classroom', ClassroomSchema);
