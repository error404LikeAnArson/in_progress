
// check admin compte
const isAdmin = function(req, res, next){
    if(req.user){
        if(req.user.role === "admin"){
            return next();
        }
        else
            return res.redirect('/');
    }
    else
        return res.redirect('/');
}

// check connected user
const isConnect = function(req, res, next){
    if(req.user){
        return next();
    }
    else{
        return res.redirect('/');
    }
}

// check not connected user
const isNotConnect = function(req, res, next){
    if(req.user){
        return res.redirect('/');
    }
    else{
        return next();
    }
}

module.exports = {isAdmin, isConnect, isNotConnect};