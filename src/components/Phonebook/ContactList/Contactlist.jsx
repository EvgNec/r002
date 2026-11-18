import React from 'react';
import Contact from '../Contact/Contact';

function Contactlist({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </ul>
  );
}

export default Contactlist;
