import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let timerState = {
  isRunning: false,
  startTime: null,
  duration: 0
};

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.get("/state", (req, res) => {
  res.json(timerState);
});

app.post("/start", (req, res) => {
  const { duration } = req.body;

  timerState = {
    isRunning: true,
    startTime: Date.now(),
    duration
  };

  res.json({ message: "Timer started" });
});

app.post("/stop", (req, res) => {
  timerState.isRunning = false;
  res.json({ message: "Timer stopped" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
