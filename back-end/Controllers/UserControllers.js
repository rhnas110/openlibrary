const db = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const transporter = require("../middleware/transporter")


module.exports = {
    register: async (req, res) => {
        const { username, email, password, NIM,} = req.body
        
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password, salt)
        try {
             const data = await db.User.create({
                username,
                email,
                NIM,
                password: hashPass
            })

            const token = jwt.sign({id: data.id},"library")

            await transporter.sendMail({
              from: "Admin",
              to: email,
              subject: "Verification User",
              text: "Selamat datang di perpustakaan online kami",
              html: `<a href = "http://localhost:3000/verification/${token}" target = 
              "_blank">Click Here For Verify, you're code is 1334589</a>`
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
  
        if (!isValid) throw "NIM or Password Incorrect";
  
        const payload = { id: isNIMExist.id, isAdmin: isNIMExist.isAdmin };
        const token = jwt.sign(payload, "library", { expiresIn: "1h" });
        //   console.log(token);
  
        res.status(200).send(isNIMExist)
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
    verification: async(req, res) => {
      try{
        const verify = jwt.verify(req.token, "library")
        
        await db.User.update({
          verify: true
        }, {
          where: {
            id : verify.id
          }
        })
        res.status(200).send("Send")
      }catch(err){
        console.log(err)
        res.status(400).send(err)
      }
    },
    loginAdmin: async(req, res) => {
      try {
        const {username, password} = req.body

        const isUsernameExist = await db.User.findOne({
          where: {
            username,
            isAdmin: true 
          },
          raw: true
        })
        if(!isUsernameExist) return res.status(404).send("Only Admins")

        const isValid = await bcrypt.compare(password, isUsernameExist.password)
        if (!isValid) return res.status(404).send("Wrong Password")

        res.status(200).send("Login Success")
      }catch(err){
        console.log(err)
        res.status(404).send(err)
      }
    },
    keepLogin: async (req, res) => {
      try{
        const result = await db.User.findAll({
          where:{
            username: req.params.username
          }
        })
        res.status(200).send(result[0])
      }catch(err){
        console.log(err)
        res.status(404).send(err)
      }
    },
    uploadFile: async (req, res) => {
      let fileUploaded = req.file
      res.status(200).send("File Uploaded")
    }
  };