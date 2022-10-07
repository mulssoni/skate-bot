const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const port = 80;
const url = "https://api.telegram.org/bot";
const apiToken = process.env.TELEGRAM_ACCESS_TOKEN;
// Configurations
app.use(bodyParser.json());
// Endpoints
app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
// Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
