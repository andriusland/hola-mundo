import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import ComponentB from "./componentB";

const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h2>Name: {contact.name}</h2>
      <h3>Surname: {contact.surname}</h3>
      <h4>Email: {contact.email}</h4>
      <h5>
        <ComponentB></ComponentB>
      </h5>
    </div>
  );
};

ContactComponent.propTypes = {
  task: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
