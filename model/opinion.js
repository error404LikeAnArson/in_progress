const mongoose = require("mongoose");
const { Schema } = mongoose;

// doc
const opinionSchema = new Schema({
    author:{
        type: String,
        required: true
    },
    note:{
        type: Number,
        required: false
    },
    avis: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    display:{
        type: Boolean,
        default: true
    },
    pinned:{
        type: Boolean,
        default: false
    }
}); 

//make model
const opinionModel = mongoose.model('opinionModel', opinionSchema);
    

module.exports = opinionModel;