const sendSkatePoll = require("../../src/sendSkatePoll");

exports.handler = async () => {
  await sendSkatePoll();

  return { statusCode: 200 };
};
