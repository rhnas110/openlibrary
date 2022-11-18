const { createTransport } = require("nodemailer");

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORDEMAIL,
  },
  tls: {
    rejectUnauthorized: false,
  },
});



module.exports = transporter;
