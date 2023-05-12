const ContactItem = ({ person, index, deleteContact }) => {
  const nameArr = person.name.split(" ");
  const telArr = person.phone.split("x");
  const handleClick = () => {
    deleteContact(person.id);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{nameArr[0]}</td>
      <td>{nameArr[1]}</td>
      <td>{telArr[0]}</td>
      <td>
        <button onClick={handleClick}>X</button>
      </td>
    </tr>
  );
};

export default ContactItem;
