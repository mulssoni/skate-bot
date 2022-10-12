const sendSkatePoll = require("../../src/sendSkatePoll");

exports.handler = async () => {
  sendSkatePoll();
  return { statusCode: 200 };
};
