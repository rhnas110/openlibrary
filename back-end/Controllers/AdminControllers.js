const db = require("../models");
const books = db.Books;

module.exports = {
  getAllBook: async (req, res) => {
    try {
      const response = await db.Books.findAll();
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },
  getBookById: async (req, res) => {
    try {
      const response = await books.findOne({ where: { id: req.params.id } });
      return res.status(200).send(response);
    } catch (error) {
      console.log(err);
      res.status(404).send(err);
    }
  },
  add_books: async (req, res) => {
    try {
      const {
        title,
        category,
        publishDate,
        image,
        author,
        publisher,
        abstract,
        stocks,
      } = req.body;
      const check = await books.findAll({ raw: true });
      const incBooks = check.map((item) => item.bookId);
      let defaultStocks = stocks ? stocks : 0;
      let defaultPublishDate = publishDate
        ? publishDate
        : new Date().getFullYear();
      const new_books = await books.create({
        title,
        category,
        publishDate: defaultPublishDate,
        image,
        author,
        publisher,
        abstract,
        bookId: Math.max(...incBooks) + 1,
        stocks: defaultStocks,
      });

      return res.status(200).send({ message: "Success", new_books });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  edit_books: async (req, res) => {
    try {
      const new_books = await books.update(req.body, {
        where: { id: req.params.id },
      });
      return res.status(201).send(new_books);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
};
