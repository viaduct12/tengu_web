const nodemailer = require("nodemailer");

const emailService = async data => {
  const { name, userEmail, body } = data;
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "tenguhost@gmail.com", // generated ethereal user
      pass: "tengupass1" // generated ethereal password
    }
  });

  let info = await transporter.sendMail({
    from: "Testing account 123", // sender address
    to: userEmail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = { emailService };
