const ButtonShow = ({ handleChangeButton }) => {
  return (
    <button className="button__show" onClick={handleChangeButton}>
      Add New Contact
    </button>
  );
};

export default ButtonShow;
