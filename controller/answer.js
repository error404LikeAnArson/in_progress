const express = require('express');
const Contain = require("../model/contain");
const { ObjectId } = require('bson');
const { getContact, getReponseTime } = require('../services/getContain');

const dataRender = {
    title: 'Réponse', 
    contact: getContact(), 
    allWorks: getAllWorks(),
    reponseTime: getReponseTime()
};

//get data before calendar integration
function getAllWorks(){
    return true;
}

// boolean, if mail send to admin = true else false
// waiting calendar integration
// async function getAllWorks(){
//     //TODO
//     return true;
// }

module.exports = {dataRender};