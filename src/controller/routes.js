const express = require("express");
const app = express();
module.exports = {
  home: () => {
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, '../../', 'index.html'));
    });
  }
};
