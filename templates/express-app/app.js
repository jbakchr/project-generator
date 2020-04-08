const express = require("express");
const bodyParser = require("body-parser");

const PORT = 5000;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`http://localhost:${PORT}`)
);
