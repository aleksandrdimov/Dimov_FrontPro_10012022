const InputAdd = (props) => {
  return (
    <input
      className="input__task"
      type="text"
      value={props.newTasks}
      onChange={(e) => props.setNewTasks(e.target.value)}
    />
  );
};

export default InputAdd;
