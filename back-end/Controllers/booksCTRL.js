const db = require("../models");
const books = db.Books;
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

module.exports = {
  books_reset: async (req, res) => {
    try {
      await books.destroy({ truncate: true });
      const check = await books.findAll();
      res.status(200).send(check);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  // process get books
  all_books: async (req, res) => {
    try {
      const check = await books.findAll({ raw: true });
      return res.status(200).send(check);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  books_ready: async (req, res) => {
    try {
      const check = await books.findAll({ where: { stocks: { [Op.gt]: 0 } } });
      return res.status(200).send(check);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  by_filter: async (req, res) => {
    try {
      const { title, category, author, publisher } = req.query;
      const check = await books.findAll({
        where: {
          [Op.or]: [
            {
              category: {
                [Op.like]: "%" + category + "%",
              },
            },
            {
              title: {
                [Op.like]: "%" + title + "%",
              },
            },
            {
              author: {
                [Op.like]: "%" + author + "%",
              },
            },
            {
              publisher: {
                [Op.like]: "%" + publisher + "%",
              },
            },
          ],
        },
        raw: true,
      });
      // const { search } = req.query;
      // const newSearch = search || "";
      // const check = await books.findAll({
      //   where: {
      //     [Op.or]: [
      //       {
      //         category: {
      //           [Op.like]: "%" + newSearch + "%",
      //         },
      //       },
      //       {
      //         title: {
      //           [Op.like]: "%" + newSearch + "%",
      //         },
      //       },
      //       {
      //         author: {
      //           [Op.like]: "%" + newSearch + "%",
      //         },
      //       },
      //       {
      //         publisher: {
      //           [Op.like]: "%" + newSearch + "%",
      //         },
      //       },
      //     ],
      //   },
      //   raw: true,
      //   // offset: offset,
      //   // limit: list_limit,
      //   // order: [[orderby, direction]],
      // });
      if (check.length === 0) {
        return res.status(200).send({ message: "buku tidak ada" });
      }

      return res.status(200).send(check);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  date_sort: async (req, res) => {
    try {
      const { date } = req.params;
      const check = await books.findAll({
        where: { publishDate: date },
        raw: true,
      });
      // kirim data bersih
      let result = {};
      for (let i = 0; i < check.length; i++) {
        result = { title: check[i].title, publishDate: check[i].publishDate };
        console.log(result);
      }
      //
      return res.status(200).send(check);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  alpha_sort: async (req, res) => {
    try {
      const { type } = req.params;
      if (type === "asc") {
        const check = await books.findAll({
          order: [
            // ["population", "DESC"],
            ["title", "ASC"],
          ],
        });
        return res.status(200).send(check);
      }
      const check = await books.findAll({
        order: [["title", "DESC"]],
      });
      return res.status(200).send(check);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  getAllProductById: async (req, res) => {
    try {
      const response = await books.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },
};
