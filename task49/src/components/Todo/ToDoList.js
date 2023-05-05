import ToDoItem from "./ToDoItem";

const TodoList = (props) => {
  return (
    <ul className="list">
      {props.tasks.map((el, index) => {
        return (
          <ToDoItem
            task={el}
            index={index}
            deleteTask={props.deleteTask}
            isDone={props.isDone}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
