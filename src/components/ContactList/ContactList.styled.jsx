import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};
  margin: 0 auto;
  padding: ${props => props.theme.spacing(5)};
  max-width: 500px;

  border-radius: ${props => props.theme.spacing(2)};
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borerFormColor};
`;

export const ContactText = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: 0.03em;
  font-weight: 500;
`;
