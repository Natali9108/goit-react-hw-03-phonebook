import styled from '@emotion/styled';

export const FilterBox = styled.div`
  text-align: center;
`;

export const FilterText = styled.p`
  margin-bottom: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
`;
export const FilterField = styled.input`
  padding: ${props => props.theme.spacing(2)};
  width: 400px;
  font-size: ${props => props.theme.fontSizes.mini};
  background-color: inherit;
  border: 1px solid ${props => props.theme.colors.borerFormColor};
  border-radius: ${props => props.theme.spacing(1)};

  &:focus {
    outline: 2px solid ${props => props.theme.colors.borerFormColor};
    outline-offset: -2px;
`;
