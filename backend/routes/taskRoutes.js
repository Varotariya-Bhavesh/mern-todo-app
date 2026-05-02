const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// POST /add
router.post("/add", async (req, res) => {
  const { text } = req.body;

  try {
    const newTask = new Task({ text });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// GET /tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;