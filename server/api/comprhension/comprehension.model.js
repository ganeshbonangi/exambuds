'use strict';

import mongoose from 'mongoose';

var ComprehensionSchema = new mongoose.Schema({
    instruction:String,
    passage:String,
    questions:{type:String,id:String}
    });

export default mongoose.model('Comprehension', ComprehensionSchema);

