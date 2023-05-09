import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.backdropColor};
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 360px;
  max-width: 400px;
  width: 100%;
  padding: 40px 15px 15px;

  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.btnColor};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 10px;
  color: ${props => props.theme.colors.btnColor};
  border: none;
  border-radius: 50%;
  background-color: transparent;
  transition-property: transform;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.02);
    background-color: ${props => props.theme.colors.btnColor};
    padding: ${props => props.theme.spacing(1)};
    color: ${props => props.theme.colors.white};
  }
`;
