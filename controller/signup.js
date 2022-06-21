const express = require('express');
const User = require('../model/user');
const { ObjectId } = require('bson');
const { getContact } = require('../services/getContain');

let message = "";

const dataRender = {
    title: 'Inscription', 
    contact: getContact(),
    message: message 
};

// set message of successful sign up
function setMessage(msg){
    message = msg;
    return;
}

// check usermane and mail in database before signup
const alreadyExisting = (req, res, next) => {
    let bool = new Boolean(true);
    User.findOne({ username: req.body.username }).then((user) => {
        if (user) {
            bool = Boolean(false);
            res.redirect('/signup');
        }
    });
    User.findOne({ mail: req.body.mail }).then((user) => {
        if (user) {
            bool = Boolean(false);
            res.redirect('/login');
        }
    });
    next(bool);
}

// password valid
const passwordC = (req, res, next) => {
    if(req.body.cpassword === req.body.password){
        next()
    }
    else{
        res.redirect('/signup');
    }
}

// create a new user in database
const newUser = (req, res) => {  
    User.create({
        username: req.body.username,
        password: req.body.password,
        mail: req.body.mail,
        number: req.body.number,
        adress: req.body.adress,
        adressSup: req.body.adressSup,
        postalCode: req.body.postalCode,
        city: req.body.city,
        role: "user"
    })
        .then(() => console.log("user save success"))
        .then(() => setMessage("Inscription terminé"))
        .then(() => res.redirect("signup"))
        .catch(err => { res.status(500).send({ message: err.message }); });
       
}


module.exports = {dataRender, alreadyExisting, passwordC, newUser}