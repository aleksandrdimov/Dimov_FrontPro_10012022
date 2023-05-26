import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./redux/todoSlice";
import "./App.css";
import InputAdd from "./components/common/InputAdd/InputAdd";
import TodoList from "./components/Todo/ToDoList";

function App() {
  const [newTasks, setNewTasks] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch(removeTodo(id));
  };

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTasks));
    setNewTasks("");
    console.log(todos);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">ToDo List:</h1>
        <form onSubmit={addTask}>
          <InputAdd newTasks={newTasks} setNewTasks={setNewTasks} />
          <button className="button__add" type="submit">
            Add Task
          </button>
        </form>
        {count > 0 && <TodoList tasks={todos} deleteTask={deleteTask} />}
        {count === 0 && "No tasks! Please, add some task . . ."}
      </div>
    </div>
  );
}

export default App;
