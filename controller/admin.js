const express = require('express');
const Contain = require("../model/contain");
const { ObjectId } = require('bson');
const { getContact, getReponseTime, getText } = require('../services/getContain');

const dataRender = {
    title: 'Admin',
    contact: getContact(),
    contain: getContain()
};

function getContain(){
    return {
        aboutText: getText(),
        reponseTime: getReponseTime(),
        contact: getContact(),
        pictureBlockBool: true,
        opinionBool: true,
        'pictureBlocks': getPictBlock()
    }
}


//TODO
//pictureBlock in database
async function getPictBlockPre(){
    const contain = await Contain.findOne( {id:1 } );
    return contain.pictureBlock;
}

function getPictBlock(){
    getPictBlockPre().then(pictBlocks => {
        return pictBlocks;
    })
        .catch(error => {});
}


//create route is not usefull anymore
/*
// const createData = async (req, res) => {
//     let pictureBlockBool;
//     let opinionBool;

//     if(req.body.opinionBool === "true"){
//         opinionBool = Boolean (true);
//         console.log("here1");
//     }
//     else{
//         opinionBool = Boolean(false);
//         console.log("here2");
//     }

//     if(req.body.pictureBlockBool === "true"){
//         pictureBlockBool = Boolean (true);
//         console.log("here3");
//     }
//     else{
//         pictureBlockBool = Boolean(false);
//         console.log("here4");
//     }

//     Contain.create({
//         id: 1,
//         opinionBool: opinionBool,
//         pictureBlockBool: pictureBlockBool,
//         aboutText:{
//             id: 1,
//             titlePage: req.body.titlePage,
//             text1: req.body.text1,
//             text2CatchPhrase: req.body.text2CatchPhrase,
//             text2: req.body.text2,
//             text3: req.body.text3
//         },
//         reponseTime:{
//             id: 1,
//             timeNumber: req.body.timeNumber,
//             timeUnit: req.body.timeUnit
//         },
//         contact:{
//             id: 1,
//             number: req.body.number,
//             mail: req.body.mail
//         },
//         pictureBlock:{
//             id: 1,
//             img: req.body.imgSrc,
//             title: req.body.titleBlock,
//             text: req.body.textBlock
//         }
//     })
//         .then(() => console.log("contain save success"))
//         .then(() => res.redirect("admin"))
//         .catch(err => { res.status(500).send({ message: err.message }); });

// };

// const pictureBlockPlus = async (req, res) => {
//     const contain = await Contain.findOne( {id: 1} )
//     contain.pictureBlock.push({
//         id: 2,
//         img: req.body.imgSrc,
//         title: req.body.titleBlock,
//         text: req.body.textBlock
//     });

//     contain.save(function (err) {
//         if (err) 
//             return handleError(err)
//         console.log('Success!');
//     });
// };

*/

const updateData = async (req, res) => {
    const contain = await Contain.findOne( {id: 1} )
    const text = await contain.aboutText.id(ObjectId("62ab2cb6f2867b33bc19df78"));
    const contact = await contain.contact.id(ObjectId("62ab2cb6f2867b33bc19df7a"));
    const reponseTime = await contain.reponseTime.id(ObjectId("62ab2cb6f2867b33bc19df79"));
    
    if(req.body.titlePage){
        text.titlePage = req.body.titlePage;
    }
    
    if(req.body.text1){
        text.text1 = req.body.text1;
    }
    
    if(req.body.text2CatchPhrase){
        text.text2CatchPhrase = req.body.text2CatchPhrase;
    }
    
    if(req.body.text2){
        text.text2 = req.body.text2;
    }
    
    if(req.body.text3){
        text.text3 = req.body.text3;
    }
    
    if(req.body.mail){
        contact.mail = req.body.mail;
    }
    
    if(req.body.number){
        contact.number = req.body.number;
    }
    
    if(req.body.timeNumber){
        reponseTime.timeNumber = req.body.timeNumber;
    }
    
    if(req.body.timeUnit){
        reponseTime.timeUnit = req.body.timeUnit;
    }
    
    if(req.body.opinionBool){
        contain.opinionBool = req.body.opinionBool;
    }
    
    if(req.body.pictureBlockBool){
        contain.pictureBlockBool = req.body.pictureBlockBool;
    }
        
    //TODO
    //pictureBlock
    
    contain.save()
        .then(() => console.log("contain save success"))
        .catch((err) => console.log("contain save fail", err));
};

//TODO
//calendar integration = gestion

module.exports = {dataRender, /*createData, */updateData};