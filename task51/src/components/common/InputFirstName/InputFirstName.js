const InputFirstName = ({ setNewFirstName, newFirstName }) => {
  const handleChangeFirstName = (e) => {
    setNewFirstName(e.target.value);
  };

  return (
    <label className="form__label">
      First Name
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        value={newFirstName}
        onChange={handleChangeFirstName}
      />
    </label>
  );
};

export default InputFirstName;
