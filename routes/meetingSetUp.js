const express = require('express');
const router = express.Router();
const {dataRender, setValue} = require("../controller/meetingSetUp");

// view set up
router.get('/', function(req, res, next) {
    if(req.user){
       setValue(req, res); 
    }
    res.render('page/meetingSetUp', dataRender);
});

// place holder for meeting after calendar integration
router.post('/', function(req, res, next){
    
});

module.exports = router;
