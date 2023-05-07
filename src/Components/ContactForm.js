// ContactForm.js
import './Styles/ContactForm.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, editContact } from './actions';

const ContactForm = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const contact = contacts.find((contact) => contact.id === id);
      if (contact) {
        setName(contact.name);
        setEmail(contact.email);
      }
    }
  }, [id, contacts]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      if (id) {
        dispatch(editContact(id, { name, email }));
        setId(null);
      } else {
        dispatch(addContact({ name, email }));
      }
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="contact-form">
      <h2 className="form-title">{id ? 'Edit Contact' : 'Add Contact'}</h2>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-submit-btn">
        {id ? 'Save Changes' : 'Add Contact'}
      </button>
    </form>
  );
};

export default ContactForm;
