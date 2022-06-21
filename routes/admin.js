const express = require('express');
const router = express.Router();
const {dataRender, /*createData,*/ updateData} = require('../controller/admin');
const jwtMiddleware = require("../middleware/auth/authentication");
const {isAdmin} = require("../middleware/auth/authorization");

// view set up
router.get('/'/*,[ jwtMiddleware()]*/, function(req, res, next) {
    
    //isAdmin(req, res, next);
    
    res.render('page/admin', dataRender);
});

// update contain data
router.post('/', function(req, res, next){
    updateData(req, res);
});


module.exports = router;
