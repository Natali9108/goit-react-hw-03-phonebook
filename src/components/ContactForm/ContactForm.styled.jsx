import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const PhonebookForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(5)};
  padding: ${props => props.theme.spacing(7)};
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};
  margin-bottom: ${props => props.theme.spacing(5)};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
`;

export const Input = styled(Field)`
  padding: ${props => props.theme.spacing(2)};
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  background-color: inherit;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.borerFormColor};
  border-radius: ${props => props.theme.spacing(1)};

  &:focus {
    outline: 2px solid ${props => props.theme.colors.borerFormColor};
    outline-offset: -2px;

    &.invalid {
      outline: 2px solid ${props => props.theme.colors.red};
      outline-offset: -2px;
    }
  }
`;

export const ErrorDescription = styled(ErrorMessage)`
  font-size: ${props => props.theme.fontSizes.mini};
  color: ${props => props.theme.colors.red};
`;

export const AddBtn = styled.button`
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  width: 140px;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
  background-color: ${props => props.theme.colors.btnBgColor};
  border: none;
  border-radius: ${props => props.theme.spacing(2)};
  cursor: pointer;
  color: inherit;

  transition-property: transform, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.02);
    background-color: ${props => props.theme.colors.btnColor};
    color: ${props => props.theme.colors.white};
  }

  &:disabled {
    border: none;
    background-color: ${props => props.theme.colors.disabledBgColor};
    color: ${props => props.theme.colors.disabledColor};
  }
`;
