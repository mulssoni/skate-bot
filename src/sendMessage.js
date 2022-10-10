require("dotenv").config();
const axios = require("axios");
const url = "https://api.telegram.org/bot";
const { TELEGRAM_ACCESS_TOKEN } = process.env;

module.exports = async (chat_id, text) => {
  await axios.post(`${url}${TELEGRAM_ACCESS_TOKEN}/sendMessage`, {
    chat_id,
    text,
  });

  return true;
};
