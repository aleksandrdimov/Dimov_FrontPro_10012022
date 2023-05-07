import ButtonDel from "../common/Button/ButtonDel";
import InputCheckbox from "../common/InputCheckbox/InputCheckbox";

const ToDoItem = (props) => {
  return (
    <li className="item" reactKey={props.reactKey}>
      <div
        className="item__content"
        onClick={() => {
          props.isDone(props.task.id);
        }}
      >
        <InputCheckbox task={props.task} isDone={props.isDone} />
        <div className={props.task.status ? "isdone" : ""}>
          <span className="item__number">{props.index + 1}.</span>
          <span className="item__text">{props.task.title}</span>
        </div>
      </div>
      <ButtonDel task={props.task} deleteTask={props.deleteTask} />
    </li>
  );
};

export default ToDoItem;
