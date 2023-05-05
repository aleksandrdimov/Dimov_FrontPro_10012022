import { useState } from "react";
import "./App.css";
import InputAdd from "./components/common/InputAdd/InputAdd";
import TodoList from "./components/Todo/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    const result = tasks.filter((el) => el.id !== id);
    setTasks(result);
  };

  const [newTasks, setNewTasks] = useState("");

  const addTask = () => {
    if (newTasks) {
      let num;
      tasks.length > 0
        ? (num = tasks.findLast(() => tasks.length).id + 1)
        : (num = tasks.length + 1);
      let newTask = {
        id: num,
        title: newTasks,
        status: false,
      };
      setTasks([...tasks, newTask]);
      setNewTasks("");
    }
  };

  const isDone = (id) => {
    let newTaskDone = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(newTaskDone);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">ToDo List:</h1>
        <div>
          <InputAdd newTasks={newTasks} setNewTasks={setNewTasks} />
          <button className="button__add" onClick={addTask}>
            Add Task
          </button>
        </div>
        {tasks && tasks.length ? (
          <TodoList tasks={tasks} deleteTask={deleteTask} isDone={isDone} />
        ) : (
          "No tasks! Please, add some task . . ."
        )}
      </div>
    </div>
  );
}

export default App;
