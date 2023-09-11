import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const getContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : [];
};

export const App = () => {
  // Створення стану для контактів та фільтрації
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  // Ефект для збереження контактів у локальному сховищі при їх зміні
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Функція для додавання нового контакту
  const handleAddContact = newContact => {
    // Перевірка на дублікат імені контакту
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicateName) {
      alert('This contact already exists!');
      return;
    }

    // Створення нового контакту з переданими даними і генерацією id
    const contact = { id: nanoid(), ...newContact };

    // Оновлення стану контактів
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  // Функція для видалення контакту
  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  // Функція для обробки зміни фільтра
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  // Фільтрація контактів на основі введеного фільтра
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Рендер компонентів
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
