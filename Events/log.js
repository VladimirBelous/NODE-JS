const EventEmitter = require("events");
const util = require("util");

class Logger {
  log = (message) => {
    console.log(message);
    this.emit("some_event", { id: 1, text: "Some event text" });
  };
}

util.inherits(Logger, EventEmitter);
module.exports = Logger;
