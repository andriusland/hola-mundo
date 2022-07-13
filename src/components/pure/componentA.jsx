import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import ComponentB from "./componentB";

const ComponentA = () => {
  const defaultContact = new Contact("Ander", "Perez", "mail@mail.com", true);
  //  console.log(contact)
  return (
    <div>
      <h2>Name: {defaultContact.name}</h2>
      <h2>Surname: {defaultContact.surname}</h2>
      <h3>Email: {defaultContact.email}</h3>
      <ComponentB contact={defaultContact}></ComponentB>
    </div>
  );
};

ComponentA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentA;
