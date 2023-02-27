import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Table } from './ContactList.styled';

import { LS_KEY } from 'redux/contacts/constants';
import { getFilteredContacts, getContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <Table>
      <tbody>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} item={contact} />
        ))}
      </tbody>
    </Table>
  );
};
