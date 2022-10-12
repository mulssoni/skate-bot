require("dotenv").config();
const axios = require("axios");
const sendPoll = require("./sendPoll");
const url = "https://api.telegram.org/bot";
const { TELEGRAM_ACCESS_TOKEN } = process.env;
const nextTuesday = require("date-fns/nextTuesday");
const nextTuesday = require("date-fns/nextTuesday");
const differenceInCalendarDays = require("date-fns/differenceInCalendarDays");
const add = require("date-fns/add");

// DOES NOT WORK LIKE THIS
const targetPollDateTuesday = differenceInCalendarDays(
  nextTuesday(add(new Date(), { days: 7 })),
  new Date()
);

module.exports = async () => {
  await sendPoll(5616549051, `Osallistun ${targetPollDateTuesday} vuoroon!`, [
    "Kyllä",
    "Ei",
  ]);
};
