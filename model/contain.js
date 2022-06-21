const mongoose = require("mongoose");
const { Schema } = mongoose;

// subdoc
const pictureBlockSchema = new Schema({
    id:{
        type: Number,
        require: true,
        unique: true
    },
    img:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    text:{
        type: String,
        require: true
    }
}); 

// subdoc
const contactSchema = new Schema({
    id:{
        type: Number,
        require: true,
        unique: true
    },
    number:{
        type: Number,
        require: true
    },
    mail:{
        type: String,
        require: true
    }
});

// subdoc
const aboutTextSchema = new Schema({
    id:{
        type: Number,
        require: true,
        unique: true
    },
    titlePage:{
        type: String,
        require: true
    },
    text1:{
        type: String,
        require: true
    },
    text2CatchPhrase:{
        type: String,
        require: false
    },
    text2:{
        type: String,
        require: false
    },
    text3:{
        type: String,
        require: false
    }
}); 

// subdoc
const reponseTimeSchema = new Schema({
    id:{
        type: Number,
        require: true,
        unique: true
    },
    timeNumber:{
        type: Number,
        require: true
    },
    timeUnit:{
        type: String,
        require: true
    }
});

// doc
const containSchema = new Schema({
    id:{
        type: Number,
        require: true,
        unique: true
    },
    opinionBool:{
        type: Boolean,
        require: true
    },
    pictureBlockBool:{
        type: Boolean,
        require: true
    },
    aboutText:{
        type: [aboutTextSchema],
        require: true
    },
    reponseTime:{
        type: [reponseTimeSchema],
        require: true
    },
    contact:{
        type: [contactSchema],
        require: true
    },
    pictureBlock:{
        type: [pictureBlockSchema],
        require: false
    },
});
    
// make model
const containModel = mongoose.model('containModel', containSchema);
    

module.exports = containModel;