import { useState } from "react";
import InputFirstName from "../../common/InputFirstName/InputFirstName";
import InputLastName from "../../common/InputLastName/InputLastName";
import InputPhone from "../../common/InputPhone/InputPhone";

const AddContact = ({ contacts, setContacts, handleChangeButton }) => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newFirstName && newLastName && newPhone) {
      let num = contacts.length + 1;

      let newContact = {
        id: num,
        name: newFirstName + " " + newLastName,
        phone: newPhone,
      };
      setContacts([...contacts, newContact]);
      setNewFirstName("");
      setNewLastName("");
      setNewPhone("");
      handleChangeButton();
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h5 className="title">New contact</h5>
        <InputFirstName
          setNewFirstName={setNewFirstName}
          newFirstName={newFirstName}
        />
        <InputLastName
          setNewLastName={setNewLastName}
          newLastName={newLastName}
        />
        <InputPhone setNewPhone={setNewPhone} newPhone={newPhone} />
        <div className="form__button-box">
          <button className="button__submit" type="submit">
            Add
          </button>
          <button className="button__cancel" onClick={handleChangeButton}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
