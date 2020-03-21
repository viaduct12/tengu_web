const express = require("express");
const router = express.Router();
const path = require("path");

module.exports = {
  home: router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/views/", "index.html"));
  }),

  about: router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/views/", "about.html"));
  }),

  contact: router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/views/", "contact.html"));
  }),
};
