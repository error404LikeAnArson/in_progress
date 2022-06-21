const express = require('express');
const Contain = require("../model/contain");
const { getContact } = require('../services/getContain');

const valueT = {
    username: '',
    city: '',
    mail: '',
    number: ''
}

const dataRender = {   
    title: 'Prise de Rendez-vous', 
    contact: getContact(),
    warning: Boolean(false),
    empty: Boolean(true), 
    value: getValue()
}

//TODO
//pass user data in value pug for mail
//mail sending
//callendar integration

// if user connect, data is send to the view
const setValue = (req, res) => {
    valueT.username = req.user.username;
    valueT.city = req.user.city;
    valueT.mail = req.user.mail;
    valueT.number = req.user.number;
}

// get user data
function getValue(){
    return valueT;  
}
    

module.exports = {dataRender, setValue};