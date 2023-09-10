import React from 'react';
import { ListWrapper } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ListWrapper>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name} - {contact.number}
        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </li>
    ))}
  </ListWrapper>
);
