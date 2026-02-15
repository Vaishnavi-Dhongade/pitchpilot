const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let meetingState = {
  duration: 30,
  startTime: null,
  isRunning: false
};

// start timer
app.post("/start", (req, res) => {
  const { duration } = req.body;

  meetingState.duration = duration;
  meetingState.startTime = Date.now();
  meetingState.isRunning = true;

  res.json({ message: "Timer started", meetingState });
});

// stop timer
app.post("/stop", (req, res) => {
  meetingState.isRunning = false;
  res.json({ message: "Stopped" });
});

// get timer state
app.get("/state", (req, res) => {
  res.json(meetingState);
});

app.listen(5000, () => console.log("Server running on 5000"));
