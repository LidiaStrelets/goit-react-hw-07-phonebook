import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactsList.module.css';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

const ContactsList = () => {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id} className={styles.contact}>
          <p className={styles.text}>
            <span className={styles.name}>{name}</span>{' '}
            <span className={styles.phone}>{number}</span>
          </p>
          <button
            className={styles.removeBtn}
            type="button"
            onClick={() => dispatch(contactsOperations.removeContactOperation(id))}
          >
            Remove contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
