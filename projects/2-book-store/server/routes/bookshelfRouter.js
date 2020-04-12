const express = require("express");
const axios = require("axios");
const {
  getBookshelfError,
  getBookshelf,
  getVolumeInfo,
  updateBookshelf,
} = require("../bookshelf");
const methodNotAllowedError = require("../errors/methodNotAllowed");
const auth = require("../middleware/auth");

const router = express.Router();
router.use(auth);

const handleSuccess = (res) => {
  const bookshelf = getBookshelf();
  return res.send({ books: bookshelf });
};

const handleError = (res) => {
  const message = getBookshelfError();
  return res.status(400).send({ message });
};

router
  .route("/:bookId/:shelf")
  .put((req, res) => {
    const { bookId, shelf } = req.params;
    const volumeInfo = getVolumeInfo(bookId);
    if (!volumeInfo) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then((response) => {
          const newVolume = {
            id: response.data.id,
            ...response.data.volumeInfo,
          };
          const wasSuccessful = updateBookshelf(newVolume, shelf);
          return wasSuccessful ? handleSuccess(res) : handleError(res);
        })
        .catch((err) => {
          console.error(err);
          res
            .status(404)
            .send({ message: `No book with book ID ${bookId} found.` });
        });
    } else {
      const wasSuccessful = updateBookshelf(volumeInfo, shelf);
      return wasSuccessful ? handleSuccess(res) : handleError(res);
    }
  })
  .all(methodNotAllowedError);

router
  .route("/")
  .get((req, res) => {
    const bookshelf = getBookshelf();
    res.send({ books: bookshelf });
  })
  .all(methodNotAllowedError);

module.exports = router;
