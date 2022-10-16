const sendPoll = require("./sendPoll");
const sendMessage = require("./sendMessage");
const nextTuesday = require("date-fns/nextTuesday");
const nextThursday = require("date-fns/nextThursday");
const format = require("date-fns/format");
const differenceInCalendarDays = require("date-fns/differenceInCalendarDays");
const add = require("date-fns/add");

module.exports = async () => {
  const CANCELLATION_TIME = 7; //days
  const ANSWER_TIME = 3; //days
  const TOTAL_TIME_BEFORE_EVENT = CANCELLATION_TIME + ANSWER_TIME; // days
  const today = new Date();
  const eventTuesday = nextTuesday(add(today, { days: ANSWER_TIME }));
  const eventThursday = nextThursday(add(today, { days: ANSWER_TIME }));
  const daysUntilTuesdayEvent = differenceInCalendarDays(eventTuesday, today);
  const daysUntilThursdayEvent = differenceInCalendarDays(eventThursday, today);
  const createTuesday =
    daysUntilTuesdayEvent === TOTAL_TIME_BEFORE_EVENT ? true : false;
  const createThursday =
    daysUntilThursdayEvent === TOTAL_TIME_BEFORE_EVENT ? true : false;

  await sendMessage(
    5616549051,
    `Scheduled function working! Days until creation Tue: ${
      daysUntilTuesdayEvent - TOTAL_TIME_BEFORE_EVENT
    }, Thu ${daysUntilThursdayEvent - TOTAL_TIME_BEFORE_EVENT}`
  );
  if (daysUntilTuesdayEvent === CANCELLATION_TIME) {
    await sendMessage(
      5616549051,
      `Viimeinen päivä ilmoittautua ${format(eventTuesday, "cccc d.M")}`
    );
  }
  if (daysUntilThursdayEvent === CANCELLATION_TIME) {
    await sendMessage(
      5616549051,
      `Viimeinen päivä ilmoittautua ${format(eventThursday, "cccc d.M")}`
    );
  }

  if (createTuesday) {
    try {
      const res = await sendPoll(
        5616549051,
        `Osallistun ${format(
          eventTuesday,
          "cccc d.M"
        )} vuoroon!\n(Ilmoita viimeistään viikkoa aikaisemmin)`,
        ["Kyllä", "Ei"]
      );
      console.log(`created: ${res}`);
    } catch (err) {
      console.log(`Unable to create tuesday poll to: ${eventTuesday}`, err);
    }
  }

  if (createThursday) {
    try {
      const res = await sendPoll(
        5616549051,
        `Osallistun ${format(
          eventThursday,
          "cccc d.M"
        )} vuoroon!\n(Ilmoita viimeistään viikkoa aikaisemmin)`,
        ["Kyllä", "Ei"]
      );
      console.log(`created: ${res}`);
    } catch (err) {
      console.log(`Unable to create tuesday poll to: ${eventTuesday}`, err);
    }
  }
};
