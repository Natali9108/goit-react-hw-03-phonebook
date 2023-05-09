import styled from '@emotion/styled';

export const IconBtn = styled.button`
  padding: 4px;
  color: ${props => props.theme.colors.btnColor};
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.btnBgColor};
  transition-property: transform, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.02);
    background-color: ${props => props.theme.colors.btnColor};
    color: ${props => props.theme.colors.white};
  }
`;
