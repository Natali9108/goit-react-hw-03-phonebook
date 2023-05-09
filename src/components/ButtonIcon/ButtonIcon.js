import React from 'react';
import PropTypes from 'prop-types';
import { IconBtn } from './BottonIcon.styled';

const IconButton = ({ children, onClick }) => (
  <IconBtn type="button" onClick={onClick}>
    {children}
  </IconBtn>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default IconButton;
