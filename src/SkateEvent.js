const sendPoll = require("./sendPoll");
const nextTuesday = require("date-fns/nextTuesday");
const sub = require("date-fns/sub");
const format = require("date-fns/format");

export default class SkateEvent {
  constructor(chatId, cancellationTime, answerTime) {
    this.chatId = chatId;
    this.cancellationTime = cancellationTime;
    this.answerTime = answerTime;
  }

  static today = new Date();
  static dayOfEvent = nextTuesday(today);
  static eventCreationDate = sub(this.dayOfEvent, {
    days: this.cancellationTime + this.answerTime,
  });

  static async create() {
    if (today === this.eventCreationDate) {
      try {
        const res = await sendPoll(
          5616549051,
          `Osallistun ${format(
            this.dayOfEvent,
            "cccc d.M"
          )} vuoroon!\n(Ilmoita viimeistään viikkoa aikaisemmin)`,
          ["Kyllä", "Ei"]
        );
        console.log(`created: ${res}`);
      } catch (err) {
        console.log(
          `Unable to create tuesday poll to: ${this.dayOfEvent}`,
          err
        );
      }
    }
  }
}
