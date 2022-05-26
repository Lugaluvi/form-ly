const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Form.ly API!");
});

app.listen(8080);