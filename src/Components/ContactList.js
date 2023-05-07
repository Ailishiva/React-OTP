import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, editContact } from './actions';
import './Styles/ContactList.css'

const ContactList = () => {
  const [editId, setEditId] = useState(null);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEditClick = (id) => {
    setEditId(id);
  };

  const handleFormSubmit = (id, updatedContact) => {
    dispatch(editContact(id, updatedContact));
    setEditId(null);
  };

  return (
    <div className="container">
      <h2 className="title">Contact List</h2>
      {contacts.length > 0 ? (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              <div className="contact-details">
                <span className="contact-name">{`Name: ${contact.name}`}</span>
                <span className="contact-email">{`Email: ${contact.email}`}</span>
              </div>
              <div className="contact-actions">
                <button
                  onClick={() => handleDeleteClick(contact.id)}
                  className="delete-button"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditClick(contact.id)}
                  className="edit-button"
                >
                  Edit
                </button>
              </div>
              {editId === contact.id && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit(contact.id, {
                      name: e.target.name.value,
                      email: e.target.email.value,
                    });
                  }}
                  className="edit-form"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultValue={contact.name}
                    className="edit-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={contact.email}
                    className="edit-input"
                  />
                  <button type="submit" className="save-button">
                    Save
                  </button>
                </form>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-contacts">No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;
