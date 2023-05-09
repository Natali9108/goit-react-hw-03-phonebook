import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { BsPersonFillAdd } from 'react-icons/bs';
import ButtonIcon from '../ButtonIcon';
import Modal from '../Modal';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

export class App extends Component {
  temlate = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  LOCAL_STORAGE_KEY = 'contacts';

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        this.LOCAL_STORAGE_KEY,
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
    const contactName = contacts.map(contact => contact.name.toLowerCase());

    if (contactName.includes(name.toLowerCase())) {
      alert(`${data.name} is already in contacts.`);
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
