import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  fetchTasks,
  removeTodo,
  setInputName,
} from "./redux/todoSlice";
import "./App.css";
import InputAdd from "./components/common/InputAdd/InputAdd";
import TodoList from "./components/Todo/ToDoList";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.todo.count);
  const input = useSelector((state) => state.todo.inputName);
  const todos = useSelector((state) => state.todo.todos);

  const deleteTask = (id) => {
    dispatch(removeTodo(id));
  };

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTodo());
    console.log(todos);
  };

  const handleChange = (e) => {
    dispatch(setInputName(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">ToDo List:</h1>
        <form onSubmit={addTask}>
          <InputAdd inputName={input} handleChange={handleChange} />
          <button className="button__add" type="submit">
            Add Task
          </button>
        </form>
        {todos.length > 0 && <TodoList tasks={todos} deleteTask={deleteTask} />}
        {todos.length === 0 && "No tasks! Please, add some task . . ."}
      </div>
    </div>
  );
}

export default App;
