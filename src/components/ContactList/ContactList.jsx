import React from 'react';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import { padaddLeadingZero } from 'utils';
import { ContactsList, ContactItem, ContactText } from './ContactList.styled';

const ContactList = ({ items, onDeleteContact }) => {
  return (
    <ContactsList>
      {items.map(({ id, name, number }, index) => (
        <ContactItem key={id}>
          <ContactText>
            {padaddLeadingZero(index + 1)}. {name}: {number}
          </ContactText>
          <ButtonIcon onClick={() => onDeleteContact(id)}>
            <MdDelete />
          </ButtonIcon>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
