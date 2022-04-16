const path = require("path");

const createPath = (page) =>
  path.resolve(__dirname, "../viewss", `${page}.ejs`);

module.exports = createPath;
