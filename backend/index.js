const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const eventList = [];

app.get("/", (req, res) => {
  console.log(req);
  res.send("serwwer działa!!!");
});

app.post("/events", (req, res) => {
  eventList.push(req.body);
  res.status(200).end();
});

app.get("/events", (req, res) => {
  res.json({ eventList });
});

app.delete("/events/:eventID", (req, res) => {
  const eventID = parseInt(req.params.eventID, 10);

  console.log(eventID);

  if (eventList[eventID] !== undefined) {
    eventList.splice(eventID, 1);
    res.status(200).end();
  } else {
    res.status(403).end();
  }
});

app.listen(8888, () => {
  console.log("aplikacja wystartowała");
});
