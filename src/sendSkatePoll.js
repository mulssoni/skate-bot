require("dotenv").config();
const sendPoll = require("./sendPoll");
const isTuesday = require("date-fns/isTuesday");
const isThursday = require("date-fns/isThursday");
const nextTuesday = require("date-fns/nextTuesday");
const nextThursday = require("date-fns/nextThursday");
const format = require("date-fns/format");
const differenceInCalendarDays = require("date-fns/differenceInCalendarDays");
const add = require("date-fns/add");

module.exports = async () => {
  const CANCELLATION_TIME = 7; //days
  const ANSWER_TIME = 3; //days
  const TOTAL_TIME_BEFORE_EVENT = CANCELLATION_TIME + ANSWER_TIME; // days
  const targetPollDateTuesday = nextTuesday(
    add(new Date(), { days: TOTAL_TIME_BEFORE_EVENT })
  );
  const targetPollDateThursday = nextThursday(
    add(new Date(), { days: TOTAL_TIME_BEFORE_EVENT })
  );
  const today = new Date();
  const daysUntilTuesdayEvent = differenceInCalendarDays(
    targetPollDateTuesday,
    today
  );
  const daysUntilThursdayEvent = differenceInCalendarDays(
    targetPollDateThursday,
    today
  );
  const createTuesday = daysUntilTuesdayEvent - 7 === 0 ? true : false;
  const createThursday = daysUntilThursdayEvent - 7 === 0 ? true : false;

  console.log(
    today,
    targetPollDateThursday,
    targetPollDateTuesday,
    isTuesday(today),
    isThursday(today),
    daysUntilTuesdayEvent,
    daysUntilThursdayEvent,
    createTuesday,
    createThursday
  );

  if (createTuesday) {
    try {
      const res = await sendPoll(
        5616549051,
        `Osallistun ${format(targetPollDateTuesday, "ccc d.M")} vuoroon! 
        Ilmoita viimeistään viikkoa aikaisemmin`,
        ["Kyllä", "Ei"]
      );
      console.log(`created: ${res}`);
    } catch (err) {
      console.log(
        `Unable to create tuesday poll to: ${targetPollDateTuesday}`,
        err
      );
    }
  }

  if (createThursday) {
    try {
      const res = await sendPoll(
        5616549051,
        `Osallistun ${format(targetPollDateThursday, "ccc d.M")} vuoroon! 
          Ilmoita viimeistään viikkoa aikaisemmin`,
        ["Kyllä", "Ei"]
      );
      console.log(`created: ${res}`);
    } catch (err) {
      console.log(
        `Unable to create tuesday poll to: ${targetPollDateThursday}`,
        err
      );
    }
  }
};
