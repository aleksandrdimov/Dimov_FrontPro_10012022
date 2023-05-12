const InputLastName = ({ setNewLastName, newLastName }) => {
  const handleChangeLastName = (e) => {
    setNewLastName(e.target.value);
  };

  return (
    <label className="form__label">
      Last Name
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        value={newLastName}
        onChange={handleChangeLastName}
      />
    </label>
  );
};

export default InputLastName;
