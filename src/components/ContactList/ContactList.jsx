import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactItem,
  ContactText,
  DeleteBtn,
} from './ContactList.styled';

const ContactList = ({ items, onDeleteContact }) => {
  return (
    <ContactsList>
      {items.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactText>
            {name}: {number}
          </ContactText>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            <AiFillDelete />
          </DeleteBtn>
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
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
