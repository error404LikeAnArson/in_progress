const express = require('express');
const Contain = require("../model/contain");
const { ObjectId } = require('bson');
const { getContact } = require('../services/getContain');


const dataRender = {
    title: 'Contact', 
    contact: getContact()
}


module.exports = {dataRender};