require("dotenv").config();
const axios = require("axios");
const url = "https://api.telegram.org/bot";
const { TELEGRAM_ACCESS_TOKEN } = process.env;

module.exports = async (chat_id, cmd) => {
  if (cmd === "!poll") {
    await axios.post(`${url}${TELEGRAM_ACCESS_TOKEN}/sendPoll`, {
      chat_id,
      question: "Osallistun tiistaina 18.10.2022 - klo 21-23",
      options: ["Kyllä", "Ei"],
      is_anonymous: false,
    });
  }

  return true;
};
