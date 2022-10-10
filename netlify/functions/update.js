const sendMessage = require("../../src/sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  await sendMessage(message.chat.id, `I got your message! ${message.text}`);
  return { statusCode: 200 };
};
