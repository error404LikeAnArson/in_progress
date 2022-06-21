const express = require('express');
const User = require("../model/user");
const Contain = require("../model/contain");
const { ObjectId } = require('bson');
const { getContact } = require('../services/getContain');

let user = {};
let error = '';

const dataRender = {
    title: "Profil", 
    contact: getContact(),
    user: getUser(),
    error: getError()
}

//function test
// function getUser(){
//     return { 
//         username: "username", 
//         password: "password",
//         mail: "mail@mail.co",
//         number: "001122334455",
//         adress: "adress",
//         adressSup: "adressSup",
//         postalCode: "83400",
//         city: "city"
//     }
// }

// set user information
function setUser(req, res, next){
    user = { 
        username: req.user.username, 
        password: req.user.password,
        mail: req.user.mail,
        number: req.user.number,
        adress: req.user.adress,
        adressSup: req.user.adressSup,
        postalCode: req.user.postalCode,
        city: req.user.city
    }
    next()
}

// get user information
function getUser(){
    return user;
}

// set error message
function setError(msg){
    error = msg;
    return;
}

// get error message
function getError(){
    return error;
}

// change user data
function updateUser(req, res){
    if((req.body.username) && (req.body.username !== req.user.username)){
        User.findOne({ username: req.body.username }).then((user) => {
            if (user) {
                setError("this username is already use");
                res.redirect('/profile/update');
            }
        });

        User.findOneAndUpdate({ mail: req.user.mail }, { username: req.body.username});
    }

    if((req.body.password) && (req.body.password !== req.user.password)){
        if(req.body.password === req.body.cpassword){
            User.findOneAndUpdate({ username: req.user.username }, { password: req.body.password});
        }
        else{
            setError("error in password confirmation");
        }
    }

    if((req.body.mail) && (req.body.mail !== req.user.mail)){
        User.findOne({ mail: req.body.mail }).then((user) => {
            if (user) {
                setError("this mail is already use");
                res.redirect('/profile/update');
            }
        });

        User.findOneAndUpdate({ username: req.user.username }, { mail: req.body.mail});
    }
    
    if((req.body.number) && (req.body.number !== req.user.number)){
        User.findOneAndUpdate({ username: req.user.username }, { number: req.body.number});
    }
    
    if((req.body.adress) && (req.body.adress !== req.user.adress)){
        User.findOneAndUpdate({ username: req.user.username }, { adress: req.body.adress});
    }
    
    if((req.body.adressSup) && (req.body.adressSup !== req.user.adressSup)){
        User.findOneAndUpdate({ username: req.user.username }, { adressSup: req.body.adressSup});
    }
    
    if((req.body.postalCode) && (req.body.postalCode !== req.user.postalCode)){
        User.findOneAndUpdate({ username: req.user.username }, { postalCode: req.body.postalCode});
    }
    
    if((req.body.city) && (req.body.city !== req.user.city)){
        User.findOneAndUpdate({ username: req.user.username }, { city: req.body.city});
    }

    res.redirect('/profile');
}


module.exports = {dataRender, setUser, updateUser};