import ButtonDel from "../common/Button/ButtonDel";
import InputCheckbox from "../common/InputCheckbox/InputCheckbox";

const ToDoItem = ({ deleteTask, task, index }) => {
  return (
    <li className="item">
      <div className="item__content">
        <InputCheckbox task={task} />
        <div className="">
          <span className="item__number">{index + 1}.</span>
          <span className="item__text">{task.text}</span>
        </div>
      </div>
      <ButtonDel task={task} deleteTask={deleteTask} />
    </li>
  );
};

export default ToDoItem;
