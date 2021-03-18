import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contact/contact-actions';

const ContactList = ({ contacts, deleteContact }) => {
  const onHandleChange = e => {
    deleteContact(e.target.id);
  };

  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
            <button id={id} type="button" onClick={onHandleChange}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

const mapStateToProps = state => ({
  contacts: state.contact.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.contact.filter.toLowerCase()),
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
