const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to git revise");
});

app.listen(3999, () => {
  console.log("server run on 3030");
});
