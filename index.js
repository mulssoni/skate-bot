require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const port = 80;
const url = "https://api.telegram.org/bot";
const apiToken = process.env.TELEGRAM_ACCESS_TOKEN;
const serverless = require("serverless-http");
// Configurations
app.use(bodyParser.json());
// Endpoints
exports.handler = async function (event, context) {
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
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};
