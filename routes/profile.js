const express = require('express');
const router = express.Router();
const {isConnect} = require("../middleware/auth/authorization");
const {dataRender, setUser, updateUser} = require("../controller/profile")

//view set up
router.get('/', function(req, res, next) {
    isConnect(req, res, next);
    setUser(req, res, next);
    res.render('page/profile', dataRender);
});

//view for an update
router.get('/update', function(req, res, next) {
    res.render('page/profile_update', dataRender);
});

//update user data
router.post('/update', function(req, res, next){
    updateUser(req, res, next);
});

module.exports = router;
