const express = require('express');
const router = express.Router();
const {dataRender} = require("../controller/contact");

// view set up
router.get('/', function(req, res, next) {
    res.render('page/contact', dataRender);
});

module.exports = router;
