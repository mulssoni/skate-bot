require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const url = "https://api.telegram.org/bot";
const apiToken = process.env.TELEGRAM_ACCESS_TOKEN;
const serverless = require("serverless-http");
const router = express.Router();

// Configurations
app.use(bodyParser.json());

// Endpoints
app.get("/", (req, res) => {
  res.status(200).send(response);
});

app.post("/", (req, res) => {
  const chatId = req.body.message.chat.id;
  const sentMessage = req.body.message.text;

  axios
    .post(`${url}${apiToken}/sendMessage`, {
      chat_id: chatId,
      text: `hello back 👋 You just said: ${sentMessage}`,
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});
// Listening
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

app.use(`/.netlify/functions/test`, router);

exports.handler = app;
module.exports.handler = serverless(app);
