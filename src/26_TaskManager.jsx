import { useReducer } from "react";

// Function to create a new task
function createTask(title) {
  return {
    id: crypto.randomUUID(),
    title: title,
    status: "pending",
  };
}

// Reducer function
export function reducer(tasks, action) {
  if (action.type === "add") {
    return [...tasks, action.task];
  } else if (action.type === "update") {
    return tasks.map((task) =>
      task.id === action.id
        ? {
            ...task,
            status: task.status === "pending" ? "completed" : "pending",
          }
        : task,
    );
  } else if (action.type === "delete") {
    return tasks.filter((task) => task.id !== action.id);
  } else {
    throw new Error("This action type isn't supported");
  }
}

export function TaskManager() {
  const [tasks, dispatch] = useReducer(reducer, []);

  const handleUpdateTaskStatus = (id) => {
    dispatch({ type: "update", id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "delete", id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("task").trim();

    if (!title) return;

    dispatch({
      type: "add",
      task: createTask(title),
    });

    e.target.reset();
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Task title" />

        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <button
                className={`status ${task.status}`}
                onClick={() => handleUpdateTaskStatus(task.id)}
              />

              {task.title}
            </div>

            <button className="link" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
