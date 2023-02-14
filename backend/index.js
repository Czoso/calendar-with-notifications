const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.send("serwwer działa!!!");
});

app.listen(8888, () => {
  console.log("aplikacja wystartowała");
});
