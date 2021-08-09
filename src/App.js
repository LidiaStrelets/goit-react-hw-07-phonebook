import 'App.css';
import React, { useEffect } from 'react';

import Section from 'components/Section';
import Form from 'components/Form';
import Contacts from 'components/Contacts';

import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

const App = () => {
  const items = useSelector(contactsSelectors.getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <Section title="Phonebook">
        <Form />
        {items.length > 0 && <Contacts title="Contacts" />}
      </Section>
    </div>
  );
};

export default App;
