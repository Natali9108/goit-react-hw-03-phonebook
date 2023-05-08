import * as Yup from 'yup';

export const validationSchema = () => {
  const regexName =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const regexNumber =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  return Yup.object().shape({
    name: Yup.string()
      .matches(
        regexName,
        'Name may contain only letters, apostrophe, dash and spaces'
      )
      .required('This field is required'),
    number: Yup.string()
      .matches(
        regexNumber,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('This field is required'),
  });
};
