import React, { Component } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { validationSchema } from '../../utils';
import {
  PhonebookForm,
  Label,
  Input,
  ErrorDescription,
  AddBtn,
} from './ContactForm.styled';

class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  state = {
    name: this.initialValues,
    number: this.initialValues,
  };

  handleSubmit = (values, actions) => {
    this.props.onSubmit(values);

    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({ isValid, dirty }) => (
          <PhonebookForm autoComplete="off">
            <Label htmlFor="name">
              Name
              <Input
                type="text"
                name="name"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
              />
              <ErrorDescription component="div" name="name" />
            </Label>
            <Label htmlFor="number">
              Number
              <Input
                type="tel"
                name="number"
                //     title="Phone number must be digits and can contain
                // spaces, dashes, parentheses and can start with +"
                //     required
              />
              <ErrorDescription component="div" name="number" />
            </Label>

            <AddBtn type="submit" disabled={!isValid || !dirty}>
              Add contact
            </AddBtn>
          </PhonebookForm>
        )}
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
