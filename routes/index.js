const express = require('express');
const router = express.Router();
const {dataRender} = require("../controller/home");

// view set up
router.get('/', function(req, res, next) {
    res.render('index', dataRender);
});

// view set up bis
router.get('/home', function(req, res, next) {
    res.render('index', dataRender);
});

module.exports = router;
