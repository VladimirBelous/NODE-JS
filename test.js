const userName = "Vladimir";

const sayHi = (name) => `Hello, my name is ${name}`;

module.exports = { userName, sayHi };

const fs = require("fs");

fs.readFile("./text.txt", "utf8", (err, data) => {
  fs.mkdir("./files", () => {
    fs.writeFile("./files/text2.txt", `${data} new text`, () => {});
  });
});

setTimeout(() => {
  fs.unlink("./files/text2.txt", () => {});
}, 4000);
setTimeout(() => {
  fs.rmdir("./files", () => {});
}, 6000);
