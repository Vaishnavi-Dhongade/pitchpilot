import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let timer = {
  isRunning: false,
  startTime: null,
  duration: 0
};

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.get("/state", (req, res) => {
  res.json(timer);
});

app.post("/start", (req, res) => {
  timer = {
    isRunning: true,
    startTime: Date.now(),
    duration: req.body.duration
  };
  res.json({ status: "started" });
});

app.post("/stop", (req, res) => {
  timer.isRunning = false;
  res.json({ status: "stopped" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
