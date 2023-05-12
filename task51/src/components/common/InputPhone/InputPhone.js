const InputPhone = ({ setNewPhone, newPhone }) => {
  const handleChangePhone = (e) => {
    setNewPhone(e.target.value);
  };

  return (
    <label className="form__label">
      Phone
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={newPhone}
        onChange={handleChangePhone}
      />
    </label>
  );
};

export default InputPhone;
