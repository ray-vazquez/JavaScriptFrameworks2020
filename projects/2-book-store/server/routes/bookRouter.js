const express = require("express");
const axios = require("axios");
const { cleanUpVolumeInfo } = require("../util");
const { findShelfForBook } = require("../bookshelf");

const methodNotAllowedError = require("../errors/methodNotAllowed");

const router = express.Router();

router
  .route("/:bookId")
  .get((req, res) => {
    const { bookId } = req.params;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((response) => {
        const newVolume = {
          id: response.data.id,
          ...cleanUpVolumeInfo(response.data.volumeInfo),
          shelf: findShelfForBook(response.data.id),
        };
        res.send({ book: newVolume });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: `No book with book ID ${bookId} found.` });
      });
  })
  .all(methodNotAllowedError);

module.exports = router;
