const express = require("express");
const path = require("path");
const app = express();
const { home, about, contact } = require("./controller/api");


const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "../", "public")));


app.listen(PORT, () => {
  console.log("started server on http://localhost:3000");
});

app.use("/", home);
app.use("/about", about);
app.use("/contact", contact);


