const {expressjwt} = require("express-jwt");

// authentification with jwt
const authentication = function (opts) {
  const baseJwtConfig = {
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ["HS256"],
  };
  if (opts) {
    return expressjwt(opts);
  }
  return expressjwt(baseJwtConfig);
};

module.exports = authentication;