const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require('validator');

// doc
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            minlength: 4,
            validate(value){
                if(value.toLowerCase().includes('password')){
                    throw new Error('Password cannot contain "Password"');
                }
             }
        },
        mail:{
            type: String,
            required: true,
            unique: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invalid');
                }
            }
        },
        number:{
            type: Number,
            required: true
        },
        adress:{
            type: String,
            required: false
        },
        adressSup:{
            type: String,
            required: false
        },
        postalCode:{
            type: Number,
            required: false
        },
        city:{
            type: String,
            required: false
        },
        role:{
            type: String,
            required: true,
            default: "user"
        }

    },
);

// encryption password
userSchema.pre(
    'save',
    async function(next) {
      const user = this;
      const hash = await bcrypt.hash(this.password, 8);
  
      this.password = hash;
      next();
    }
);

// compare encrypted password
userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
}

// make model
const userModel = mongoose.model('userModel', userSchema);


module.exports = userModel;