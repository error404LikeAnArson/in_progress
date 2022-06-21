const express = require('express');
const { ObjectId } = require('bson');
const { getContact } = require('../services/getContain');



const dataRender = {
    title: 'Accueil',  
    contact: getContact()
};



module.exports = {dataRender};