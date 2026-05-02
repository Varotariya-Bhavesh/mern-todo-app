function TaskList({ tasks, onDelete }) {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.length === 0 ? (
                <p>No tasks yet</p>
            ) : (
                tasks.map((task) => (
                    <li
                        key={task._id}
                        style={{
                            padding: "10px",
                            borderBottom: "1px solid #ccc",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {task.text}

                        <button
                            onClick={() => onDelete(task._id)}
                            style={{
                                background: "red",
                                color: "white",
                                border: "none",
                                padding: "5px 10px",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
}

export default TaskList;