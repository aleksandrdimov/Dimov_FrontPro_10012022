import ToDoItem from "./ToDoItem";

const TodoList = ({ deleteTask, tasks }) => {
  return (
    <ul className="list">
      {tasks.map((el, index) => {
        return (
          <ToDoItem
            key={el.id}
            task={el}
            index={index}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
