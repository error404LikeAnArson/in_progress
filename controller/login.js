const express = require('express');
const User = require ('../model/user');
const Contain = require ('../model/contain');
const jwt = require("jsonwebtoken");
const { ObjectId } = require('bson');
const { getContact } = require('../services/getContain');

const dataRender = { 
    title: 'Connexion', 
    contact: getContact(),
};

//login with json web token
const loginValidator = async (req,res,next) => {
    const uName = req.body.username;
    const pass = req.body.password;

    const foundUser = await User.findOne({username: uName});
    
    if (!foundUser) {
        res.status(418).render('404');
    } else if (foundUser.isValidPassword(pass)) {
        const token = jwt.sign({user: foundUser}, process.env.JWT_SECRET_KEY);
        console.log(token);
        res.json({token});
    } else {
        res.send("wrong password bro !")
    }
};

module.exports = {loginValidator, dataRender};