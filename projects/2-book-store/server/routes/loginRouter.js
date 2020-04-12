const express = require("express");
const jwt = require("jsonwebtoken");

const methodNotAllowedError = require("../errors/methodNotAllowed");

const router = express.Router();

// TODO reuse this
// You should never hardcode this in your repo in the real world
const JWT_SECRET = "TODO";
const USER_ID = "1234";
const USERNAME = "username";
const PASSWORD = "password";
const UUID = "341a2be5-9a98-4f08-8ac9-affd5c5cd1b0";

router
  .route(["/jwt", "/uuid"])
  .post((req, res) => {
    // Slowing down so that you can see if the button has been disabled
    setTimeout(() => {
      const { username = undefined, password = undefined } = req.body;

      if (!username || !password) {
        return res.status(400).send({
          message:
            "Pst! You are missing something in your request. Do you have a 'Content-Type' header and is it 'application/json?' Are you sending JSON? Is the username and password a part of the request?",
        });
      }

      if (username === USERNAME && password === PASSWORD) {
        if (req.originalUrl.includes("/jwt")) {
          const token = jwt.sign({ sub: USER_ID.toString() }, JWT_SECRET);
          return res.status(200).send({
            message: "You did it! Success!",
            token,
          });
        } else if (req.originalUrl.includes("/uuid")) {
          return res.status(200).send({
            message: "You did it! Success!",
            uuid: UUID,
          });
        }
      }

      return res.status(401).send({
        message: "Unauthorized. Your username or password is not correct.",
      });
    }, 500);
  })
  .all(methodNotAllowedError);

module.exports = router;
