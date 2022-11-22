const db = require("../models");
const books = db.Books;
const { Op } = require("sequelize");

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
  deleteBook: async (req, res) => {
    try {
      await books.destroy({
        where: { id: req.params.id },
      });
      res.status(201).send({ msg: `deleted id:${req.params.id}` });
    } catch (error) {
      console.log(error);
    }
  },
  Pagination: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 3;
      const search = req.query.search_query || "";
      const offset = limit * page;
      const totalRows = await db.Books.count({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              category: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
      });
      const totalPage = Math.ceil(totalRows / limit);
      const result = await db.Books.findAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              category: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
        offset: offset,
        limit: limit,
        order: [["id"]],
      });
      const resultDesc = await db.Books.findAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              category: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
        offset: offset,
        limit: limit,
        order: [["id", "DESC"]],
      });

      res.status(200).send({
        resultDesc: resultDesc,
        result: result,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage,
      });
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },
  getAllBook: async (req, res) => {
    try {
      const response = await db.Books.findAll();
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },
};
