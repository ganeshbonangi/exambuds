'use strict';

import mongoose from 'mongoose';

var ComprehensionSchema = new mongoose.Schema({
    id:Number,
    instruction:String,
    passage:String,
    questions:[{type:String,id:String}]
    });

export default mongoose.model('Comprehension', ComprehensionSchema);

