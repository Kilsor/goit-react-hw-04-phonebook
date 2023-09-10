import React from 'react';
import { FilterWrapper } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterWrapper>
    <label>Filter by name:</label>
    <input type="text" value={value} onChange={onChange} />
  </FilterWrapper>
);
