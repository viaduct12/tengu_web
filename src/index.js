const express = require("express");
const path = require("path");
const app = express();
const routes = require('./controller/routes')

const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, '../', 'public')))



app.listen(PORT, () => {
  console.log("started server on http://localhost:3000");
});

const router = express.Router();
//app.use('/api', router)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

routes.home()
