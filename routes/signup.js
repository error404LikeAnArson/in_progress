const express = require('express');
const router = express.Router();
const {dataRender, newUser, alreadyExisting, passwordC} = require("../controller/signup");
const {isNotConnect} = require('../middleware/auth/authorization');

//view set up
router.get('/', function (req, res, next) {
    isNotConnect(req, res, next);
    res.render('page/signup', dataRender);
});

//sign up
router.post('/', function (req, res, next) {
    alreadyExisting(req, res, next);
    passwordC(req, res, next);
    if(bool){
        newUser(req, res);  
    }
});


module.exports = router;
