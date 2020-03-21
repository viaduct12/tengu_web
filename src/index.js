const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const { home, about, contact, email } = require("./controller/api");

const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "../", "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log("started server on http://localhost:3000");
});

app.use("/", home);
// app.use("/about", about);
// app.use("/contact", contact);
// app.use('/sendData', email)
