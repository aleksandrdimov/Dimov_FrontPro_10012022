const InputAdd = (props) => {
  return (
    <input
      className="input__task"
      type="text"
      value={props.newTasks}
      onInput={(e) => props.setNewTasks(e.target.value)}
    />
  );
};

export default InputAdd;
