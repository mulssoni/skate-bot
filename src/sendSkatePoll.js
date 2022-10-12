require("dotenv").config();
const sendPoll = require("./sendPoll");
const isTuesday = require("date-fns/isTuesday");
const isThursday = require("date-fns/isThursday");
const nextTuesday = require("date-fns/nextTuesday");
const nextThursday = require("date-fns/nextThursday");
const format = require("date-fns/format");
// const differenceInCalendarDays = require("date-fns/differenceInCalendarDays");
const add = require("date-fns/add");

// DOES NOT WORK LIKE THIS
const targetPollDateTuesday = nextTuesday(add(new Date(), { weeks: 1 })); // 2 weeks
const targetPollDateThursday = nextThursday(add(new Date(), { weeks: 1 })); // 2 weeks
const today = new Date();

module.exports = async () => {
  if (isTuesday(today)) {
    await sendPoll(
      5616549051,
      `Osallistun ${format(targetPollDateTuesday, "ccc d.M")} vuoroon! 
      Ilmoita viimeistään viikkoa aikaisemmin`,
      ["Kyllä", "Ei"]
    );
  }

  if (isThursday(today)) {
    await sendPoll(
      5616549051,
      `Osallistun ${format(targetPollDateThursday, "ccc d.M")} vuoroon! 
      Ilmoita viimeistään viikkoa aikaisemmin`,
      ["Kyllä", "Ei"]
    );
  }
};
