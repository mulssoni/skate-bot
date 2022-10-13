const sendMessage = require("../../src/sendMessage");
const sendPoll = require("../../src/sendPoll");
const sendSkatePoll = require("../../src/sendSkatePoll");

exports.handler = async (event) => {
  console.log(JSON.parse(event.body));
  const { message } = JSON.parse(event.body);
  if (message) {
    // await sendMessage(message.chat.id, `I got your message! ${message.text}`);
  }
  if (message.text === "/poll") await sendSkatePoll();
  // await sendPoll(message.chat.id, message.text);
  return { statusCode: 200 };
};
