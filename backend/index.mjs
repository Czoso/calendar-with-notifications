import jwt from "jsonwebtoken";
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

const eventList = [];
const users = [
  {
    email: "guzinskimichal123@gmail.com",
    password: "lolo",
    eventList: ["event"],
  },
];
let refreshTokens = [];
const ACCESS_TOKEN = "JBCXDRiknkjiUtc566UNibyvRsX67nIji9mUBy";
const REFRESH_TOKEN = "JKBYGTvivIViuBUvb676Gvv76v7V6vvr6XC43x35345x";
let loggedUser;

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, ACCESS_TOKEN, (err, data) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = data;
    next();
  });
};

app.get("/", (req, res) => {
  res.send("serwwer działa!!!");
});

app.post("/events", authMiddleware, (req, res) => {
  eventList.push(req.body);
  res.status(200).end();
});

app.get("/events", authMiddleware, (req, res) => {
  const user = users.find((u) => u.email == loggedUser.email);
  const eventList = user.eventList;
  res.json({ eventList });
});

app.delete("/events/:eventID", (req, res) => {
  const eventID = parseInt(req.params.eventID, 10);

  if (eventList[eventID] !== undefined) {
    eventList.splice(eventID, 1);
    res.status(200).end();
  } else {
    res.status(403).end();
  }
});

app.post("/login", (req, res) => {
  let user = users.find((u) => u.email == req.body.email);
  function sendToken() {
    loggedUser = user;
    const payload = user;
    const token = jwt.sign(payload, ACCESS_TOKEN, { expiresIn: "15s" });
    const refreshToken = jwt.sign(payload, REFRESH_TOKEN);
    refreshTokens.push(refreshToken);
    res.json({ token, refreshToken });
  }
  if (!user) {
    users.push({
      id: Date.now(),
      email: req.body.email,
      password: req.body.password,
    });
    user = users.find((u) => u.email === req.body.email);
    sendToken();
  } else {
    if (user.password === req.body.password) {
      sendToken();
    } else {
      return res.sendStatus(401);
    }
  }
});

app.post("/refresh-token", (req, res) => {
  const { token } = req.body;
  if (!refreshTokens.includes(token)) {
    return res.sendStatus(403);
  }
  jwt.verify(token, REFRESH_TOKEN, (err, data) => {
    if (err) {
      return res.sendStatus(403);
    }
    const payload = {
      email: data.email,
      eventList: data.eventList,
    };
    const newAccessToken = jwt.sign(payload, ACCESS_TOKEN, {
      expiresIn: "15s",
    });
    res.json({ token: newAccessToken });
  });
});

app.delete("/logout", (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((t) => t !== refreshToken);
  res.sendStatus(204);
});

app.listen(8888, () => {
  console.log("aplikacja wystartowała");
});
