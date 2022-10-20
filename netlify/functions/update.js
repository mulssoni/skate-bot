require("dotenv").config();
const sendMessage = require("../../src/sendMessage");
const sendSkatePoll = require("../../src/sendSkatePoll");
const sendTrasherVideos = require("../../src/sendTrasherVideos");
const messageParts = require("../../src/utils/messageParts");

exports.handler = async (event) => {
  console.log(JSON.parse(event?.body));
  const { message } = JSON.parse(event?.body);
  const { command, botName, isCommand } = messageParts(message.text);

  if (isCommand && (botName === "BobTheSkateBot" || botName === null)) {
    switch (command) {
      case "poll":
        await sendSkatePoll();
        break;

      case "trashervideos":
        await sendMessage(message.chat.id, await sendTrasherVideos());
        break;

      default:
        await sendMessage(message.chat.id, "Command was not found!");
        break;
    }
  }
  return { statusCode: 200 };
};
