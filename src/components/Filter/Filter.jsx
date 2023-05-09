import React from 'react';
import PropTypes from 'prop-types';
import { FilterBox, FilterText, FilterField } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      <FilterText>Find contacts by name</FilterText>
      <FilterField
        autoComplete="off"
        type="text"
        value={value}
        onChange={onChange}
        name="name"
      />
    </FilterBox>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
