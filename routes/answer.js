const express = require('express');
const router = express.Router();
const {dataRender} = require("../controller/answer");

// view set up
router.get('/', function(req, res, next) {
    res.render('page/answer', dataRender);
});

module.exports = router;
