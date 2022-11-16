const db = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
    register: async (req, res) => {
        const { username, email, password, NIM,} = req.body
        
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password, salt)
        try {
             await db.User.create({
                username,
                email,
                NIM,
                password: hashPass
            })
            res.status(201).send("User Created")

        } catch (err) {
            console.log(err.message)
            res.status(400).send(err.message)
        }
    },
    login: async (req, res) => {
      try {
        const { NIM, password } = req.body;
  
        const isNIMExist = await db.User.findOne({
          where: {
            NIM,
          },
          raw: true,
        });
        if (isNIMExist === null) throw "NIM not found";
  
        const isValid = await bcrypt.compare(password, isNIMExist.password);
  
        if (!isValid) throw "Email or password incorrect";
  
        const payload = { id: isNIMExist.id, isAdmin: isNIMExist.isAdmin };
        const token = jwt.sign(payload, "library", { expiresIn: "1h" });
        //   console.log(token);
  
        res.status(200).send({
          token,
          message: "Login Succes",
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    },
    findAllUser: async (req, res) => {
      try {
        const users = await db.User.findAll();
        res.status(200).send(users);
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    },
  };