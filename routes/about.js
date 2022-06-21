const express = require('express');
const router = express.Router();
const {dataRender, newOpinion} = require('../controller/about');

// view set up
router.get('/', function(req, res, next) {
    res.render('page/about', dataRender);
});

// add a opinion
//waiting complete integration
router.post('/', function(req, res, next){
    const test = newOpinion(req, res);
    if(test)
        res.status(200);
    else
        res.status(500);
});


module.exports = router;
