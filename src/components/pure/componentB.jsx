import React from 'react';
import PropTypes from 'prop-types';
//import ComponentA from './componentA';
import { Contact } from '../../models/contact.class';

const ComponentB = ({ contact }) => {
    return (
        <div>
            <h3>
                Contact is: {contact.connected ? 'Contacto En linea' : 'Contacto desconectado'}
            </h3>            
        </div>
    );
};

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentB;