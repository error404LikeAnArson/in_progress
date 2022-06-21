const express = require('express');
const Opinion = require("../model/opinion");
const Contain = require("../model/contain");
const { ObjectId } = require('bson');
const { getContact, getText } = require('../services/getContain');



const dataRender = {
    title: "Présentation",
    contact: getContact(),
    aboutText: getText(),
    'opinions': getOpinions()
};

//test
console.log("\n");
console.log("dataR");
console.log(dataRender);
console.log("\n");

// add a new opinion in database
const newOpinion = (req, res) => {
    let author = '';
    if(req.user){
        author = req.user.username;
    }
    else{
        author = "Anomyne";
    }

    const opinion = new Opinion({
        author: author,
        note: 5,
        avis: req.body.avis,
        date: Date.now,
        display: true,
        pinned: false
    });

    opinion.save()
        .then(() => console.log("opinion save success"))
        .then(() => next(true))
        .catch((err) => console.log("opinion save fail", err));

    next(false);
}

// read opinion in database
async function getOpinions(){
    const opinions = await Opinion.find()
        .then((opinions) => {
            return { 
                opinions
            }    
        })
        .catch((err) =>{
            console.error(err); 
            return { 
                
            };
        });
}

module.exports = {dataRender, newOpinion};