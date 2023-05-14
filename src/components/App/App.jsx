import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { BsPersonFillAdd } from 'react-icons/bs';
import ButtonIcon from '../ButtonIcon';
import Modal from '../Modal';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

const LOCAL_STORAGE_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isExist = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isExist) {
      alert(`This contact is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.toggleModal();
  };

  changeFilter = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilterName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterName)
    );
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const sortVisibleContacts = visibleContacts.sort((first, second) =>
      first.name.localeCompare(second.name)
    );
    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ButtonIcon onClick={this.toggleModal}>
          <BsPersonFillAdd />
        </ButtonIcon>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactForm onSubmit={this.addContact} />
          </Modal>
        )}
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          items={sortVisibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}
