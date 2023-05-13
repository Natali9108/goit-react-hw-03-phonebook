import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${props => props.theme.spacing(8)};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.medium};
  border: 1px solid #d2d5df;
  background-color: #f5f8fd;
  border-radius: ${props => props.theme.spacing(2)};
  max-width: 500px;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: ${props => props.theme.shadows.small};
`;

export const PhonebookTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const ContactsTitle = PhonebookTitle.withComponent('h2');
