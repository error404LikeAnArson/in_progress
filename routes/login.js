const router = require('express').Router();
const {loginValidator, dataRender} = require("../controller/login");
const {loginRequestValidator} = require('../middleware/validator/loginValidator');
const {isNotConnect} = require("../middleware/auth/authorization");

// view set up
router.get('/', function(req, res, next) {
    isNotConnect(req, res, next);
    res.render('page/login', dataRender);
});

// log in
router.post('/',[loginRequestValidator], function(req, res, next){
    loginValidator(req, res, next);
});

module.exports = router;
