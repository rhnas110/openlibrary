const db = require("../models");
const books = db.Books;
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken")

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
        stocks,
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
        stocks,
      });

      return res.status(200).send({ message: "Success", new_books });
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
  getAllProductById: async(req, res) => {
    try {
      
      const response = await books.findOne({
        where: {
          id: req.params.id
        }
      })
      res.status(200).send(response)
    }catch(err){
      console.log(err)
      res.status(404).send(err)
    }
  }
};
