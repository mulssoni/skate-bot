const axios = require("axios");
const url = "https://api.telegram.org/bot";
const { TELEGRAM_ACCESS_TOKEN } = process.env;

module.exports = async (
  chat_id,
  question = "test",
  options = ["Kyllä", "Ei"],
  is_anonymous = false
) => {
  if (!chat_id || !question || !options) {
    console.log("sendPoll: check params!");
    return;
  }
  const res = await axios.post(`${url}${TELEGRAM_ACCESS_TOKEN}/sendPoll`, {
    chat_id,
    question,
    options,
    is_anonymous,
  });

  return res;
};
