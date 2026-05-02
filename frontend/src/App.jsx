import { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const API_URL = "http://localhost:5000";

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async (text) => {
    try {
      await axios.post(`${API_URL}/add`, { text });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/task/${id}`);
    fetchTasks(); // refresh list
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MERN To-Do App</h1>

      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;