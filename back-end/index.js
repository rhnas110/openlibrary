const express = require("express");
const app = express();
const PORT = 2000;
const db = require("./models");
const cors = require("cors");
require("dotenv").config();
const bearerToken = require('express-bearer-token');

app.use(express.json());
app.use(cors());
app.use(bearerToken())

app.get("/", (req, res) => {
  return res.status(200).send("Open Library");
});

const { user, booksRS, admin } = require("./Routers");
app.use("/users", user);
app.use("/books", booksRS);
app.use("/admin",admin)

app.listen(PORT, () => {
  // synchronize database
  // db.sequelize.sync({ alter: true });
  // end of synchronize database
  console.log("server running at " + PORT);
});
