import React, { useState } from 'react';
import { FormWrapper } from './ContactForm.styled';

// Функціональний компонент ContactForm, що приймає `onAddContact` функцію як пропс
export const ContactForm = ({ onAddContact }) => {
  // Створення стану для управління формою додавання контакту
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  // Обробник зміни вмісту полів вводу форми
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Обробник подання форми
  const handleSubmit = event => {
    event.preventDefault();
    // Виклик функції onAddContact для додавання нового контакту і очищення форми
    onAddContact({ ...formData });
    setFormData({ name: '', number: '' });
  };

  // Рендер форми додавання контакту
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
        value={formData.name}
        onChange={handleChange}
      />
      <label>Phone number:</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={formData.number}
        onChange={handleChange}
      />
      <button type="submit">Add Contact</button>
    </FormWrapper>
  );
};
