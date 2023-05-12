import { Fragment, useEffect, useState } from "react";
import "./Contacts.css";
import axios from "axios";
import TableRowTitle from "../common/TableRowTitle/TableRowTitle";
import ContactItem from "./ContactItem/ContactItem";
import AddContact from "./AddContact/AddContact";
import ButtonShow from "../common/TableRowTitle/ButtonShow/ButtonShow";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const [buttonShow, setButtonShow] = useState([{ show: false }]);

  const handleChangeButton = () => {
    setButtonShow({ show: !buttonShow.show });
  };

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setContacts(res.data);
    });
  }, []);

  const deleteContact = (id) => {
    const result = contacts.filter((el) => {
      return el.id !== id;
    });
    setContacts(result);
  };

  return (
    <Fragment>
      <table>
        <tbody>
          <TableRowTitle />
          {contacts.map((person, index) => (
            <ContactItem
              key={person.id}
              person={person}
              index={index}
              deleteContact={deleteContact}
            />
          ))}
        </tbody>
      </table>
      {buttonShow.show ? (
        <AddContact
          handleChangeButton={handleChangeButton}
          contacts={contacts}
          setContacts={setContacts}
        />
      ) : (
        <ButtonShow handleChangeButton={handleChangeButton} />
      )}
    </Fragment>
  );
};

export default Contacts;
