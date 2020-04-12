const jwt = require("jsonwebtoken");

// TODO reuse this
// You should never hardcode this in your repo in the real world
const JWT_SECRET = "TODO";
const USER_ID = "1234";
const UUID = "341a2be5-9a98-4f08-8ac9-affd5c5cd1b0";

const auth = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const { authorization } = req.headers;
      if (!RegExp(/^Bearer /).test(authorization))
        throw new Error("UnauthorizedError");
      const token = authorization.replace(/^Bearer /, "");
      const { sub: decodedUserId } = jwt.verify(token, JWT_SECRET);

      if (decodedUserId !== USER_ID) throw new Error("UnauthorizedError");
    } else if (req.query.id) {
      const { id } = req.query;
      if (id !== UUID) throw new Error("UnauthorizedError");
    } else throw new Error("UnauthorizedError");
    next();
  } catch (err) {
    return res.status(403).send({
      message:
        "Forbidden. This means you are either missing the JWT / UUID token, the token is not being passed the right way or your token is not correct.",
    });
  }
};

const authErrorHandler = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(403).send({
      message:
        "Forbidden. This means you are either missing the JWT / UUID token, the token is not being passed the right way or your token is not correct.",
    });
  }
};

module.exports = auth;
