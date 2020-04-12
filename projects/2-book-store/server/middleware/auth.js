const jwt = require("jsonwebtoken");

const Users = require("../models/Users");
const Sessions = require("../models/Sessions");

const { JWT_SECRET } = require("../config");

const auth = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const { authorization } = req.headers;
      if (!RegExp(/^Bearer /).test(authorization))
        throw new Error("UnauthorizedError");
      const token = authorization.replace(/^Bearer /, "");
      const { sub: decodedUserId } = jwt.verify(token, JWT_SECRET);

      const user = Users.find(decodedUserId);
      if (!user) throw new Error("UnauthorizedError");
    } else if (req.query.id) {
      const { id } = req.query;
      const session = Sessions.findByUuid(id);
      if (!session) throw new Error("UnauthorizedError");
    } else throw new Error("UnauthorizedError");
    next();
  } catch (err) {
    return res.status(403).send({
      message:
        "Forbidden. This means you are either missing the JWT / UUID token, the token is not being passed the right way or your token is not correct.",
    });
  }
};

module.exports = auth;
