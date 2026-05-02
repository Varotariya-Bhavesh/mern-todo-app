const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());


const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/tasksdb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    text: { type: String, required: true }
  })
);


app.post("/add", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).send("Task cannot be empty");
    }

    const newTask = new Task({ text });
    await newTask.save();

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});


app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ _id: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Task.findByIdAndDelete(id);

    res.send({ message: "Task deleted" });
  } catch (err) {
    res.status(500).send("Error deleting task");
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));