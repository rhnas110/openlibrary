const db = require("../models");
const books = db.Books;
const { Op } = require("sequelize");

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
        // bookId,
      } = req.body;
      const check = await books.findAll({ raw: true });
      const incBooks = check.map((item) => item.bookId);
      const new_books = await books.create({
        title,
        category,
        publishDate,
        image,
        author,
        publisher,
        abstract,
        bookId: Math.max(...incBooks) + 1,
      });

      return res.status(200).send({ message: "Success", new_books });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  all_books: async (req, res) => {
    try {
      const check = await books.findAll({ raw: true });
      return res.status(200).send(check);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  by_filter: async (req, res) => {
    try {
      const { category, author, publisher } = req.query;
      const check = await books.findAll({
        where: {
          [Op.or]: {
            category: category ? category : "",
            author: author ? author : "",
            publisher: publisher ? publisher : "",
          },
        },
        raw: true,
      });
      // if check tidak ada send kosong
      if (check.length === 0) {
        console.log(check);
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
      // let result = [];
      // const check = await books.findAll({
      //   raw: true,
      // });
      if (type === "asc") {
        // for (const key in check) {
        //   result.push(check[key].title);
        // }
        // return res.status(200).send({ title: result.sort() });

        const check = await books.findAll({
          // where: { id: { [Op.gt]: 0 } },
          // include: [{ order: [["title", "asc"]] }],
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
      // for (const key in check) {
      //   result.push(check[key].title);
      // }
      // return res.status(200).send({ title: result.sort().reverse() });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
};
