const express = require('express');
const router = express.Router();
const {isConnect} = require("../middleware/auth/authorization");

// function logout
router.get('/', function(req, res, next) {
    isConnect(req, res, next);
    req.logout(function(err) {
        if (err) { 
            return next(err); 
        }
        res.redirect('/');
      });
});

module.exports = router;
