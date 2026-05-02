import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    onAdd(text);
    setText("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <button
        onClick={handleSubmit}
        style={{ marginLeft: "10px", padding: "8px 15px" }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;