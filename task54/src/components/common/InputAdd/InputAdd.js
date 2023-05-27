const InputAdd = (props) => {
  return (
    <input
      className="input__task"
      type="text"
      value={props.inputName}
      onInput={props.handleChange}
    />
  );
};

export default InputAdd;
