'use strict';

import mongoose from 'mongoose';

var ExamSchema = new mongoose.Schema({
  id: Number,/*foregin key with questions*/
  name: String,
  activationdate: {type:Date},/*Date object */
  expiredate: {type:Date},
  duration: {type:Date},/*Total Minutes for the exams*/
  classRooms: [String],/*class rooms who will see the exams*/
  authorid: String,
  disconnect: {type: Boolean,
      default: false}
});

export default mongoose.model('Exam', ExamSchema);
