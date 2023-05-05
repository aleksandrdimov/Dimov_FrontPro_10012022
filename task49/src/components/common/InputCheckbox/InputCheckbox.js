const InputCheckbox = (props) => {
  return (
    <input
      type="checkbox"
      className="item__checkbox"
      checked={props.task.status}
      onClick={() => props.isDone(props.task.id)}
    ></input>
  );
};

export default InputCheckbox;
