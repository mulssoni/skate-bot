const sendMessage = require("../../src/sendMessage");

exports.handler = async (event) => {
  console.log(JSON.parse(event.body));
  const { message } = JSON.parse(event.body);
  await sendMessage(message.chat.id, `I got your message! ${message.text}`);
  return { statusCode: 200 };
};
