import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${props => props.theme.spacing(8)};
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const PhonebookTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing(4)};
  text-align: center;
`;

export const ContactsTitle = PhonebookTitle.withComponent('h2');
