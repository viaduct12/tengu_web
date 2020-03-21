const nodemailer = require("nodemailer");

const emailService = async (data, attempt = 0) => {
  const { name, userEmail, body } = data;

  try {
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
      subject: `Hello ${name} ✔`, // Subject line
      text: body, // plain text body
      html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (e) {
    if (attempt < 3) {
      console.log(`error on iteration ${attempt}, retrying`);
      attempt += 1;
      await emailService(data, attempt);
    } else {
      console.error(`failed all 3 retry attempts`, e);
    }
  }
};

module.exports = { emailService };
