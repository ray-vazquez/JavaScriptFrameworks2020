const express = require("express");
const axios = require("axios");
const { cleanUpVolumeInfo } = require("../util");
const { findShelfForBook } = require("../bookshelf");

const Cache = require("../cache");
const searchCache = new Cache();

const methodNotAllowedError = require("../errors/methodNotAllowed");

const router = express.Router();

router
  .route("/:bookTitle")
  .get((req, res) => {
    const { bookTitle } = req.params;

    if (bookTitle.length < 2) {
      searchCache.clear();
      return res.send({ status: "searching" });
    }

    searchCache.add(bookTitle);
    setTimeout(() => {
      if (searchCache.isLast(bookTitle)) {
        searchCache.clear();
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxAllowedMaturityRating=not-mature&maxResults=20&orderBy=relevance&fields=items(id%2CvolumeInfo)%2CtotalItems`
          )
          .then((response) => {
            if (response.data.totalItems === 0) {
              const title = bookTitle.replace("+", " ");
              res.send({
                message: `No books matching "${title}" found.`,
                books: [],
              });
            } else {
              const books = response.data.items.map((book) => {
                return {
                  id: book.id,
                  ...cleanUpVolumeInfo(book.volumeInfo),
                  shelf: findShelfForBook(book.id),
                };
              });
              res.send({ status: "complete", books });
            }
          });
      } else return res.send({ status: "searching" });
    }, 500);
  })
  .all(methodNotAllowedError);

module.exports = router;
