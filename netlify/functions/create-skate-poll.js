const sendSkatePoll = require("../../src/sendSkatePoll");

exports.handler = async () => {
  const tuesdayEvent = new SkateEvent(5616549051, 7, 3);
  tuesdayEvent.create();
  await sendSkatePoll();

  return { statusCode: 200 };
};
