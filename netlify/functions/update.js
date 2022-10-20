const sendMessage = require("../../src/sendMessage");
const sendPoll = require("../../src/sendPoll");
const sendSkatePoll = require("../../src/sendSkatePoll");
const sendTrasherVideos = require("../../src/sendTrasherVideos");

exports.handler = async (event) => {
  console.log(JSON.parse(event?.body));
  const { message } = JSON.parse(event?.body);
  if (message) {
    // await sendMessage(message.chat.id, `I got your message! ${message.text}`);
  }
  if (message?.text === "/poll") await sendSkatePoll();
  if (message?.text === "/trasher-video-parts") {
    await sendMessage(message.chat.id, await sendTrasherVideos());
  }
  // await sendPoll(message.chat.id, message.text);
  return { statusCode: 200 };
};
