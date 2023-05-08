import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

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

    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSubmit={this.addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          items={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}
