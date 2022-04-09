const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log(req.url, req.method);

  //   res.setHeader("Content-Type", "text/plain");

  //   res.write("<h1>Hello world!!!</h1>");
  //   res.end();

  res.setHeader("Content-Type", "application/json");

  const data = JSON.stringify([
    { name: "Vladimir", age: 24 },
    { name: "Dari", age: 22 },
  ]);

  res.end(data);
});

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
