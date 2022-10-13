const sendMessage = require("../../src/sendMessage");
const sendSkatePoll = require("../../src/sendSkatePoll");

exports.handler = async () => {
  await sendSkatePoll();
  await sendMessage(5616549051, "Scheduled function working");

  return { statusCode: 200 };
};
