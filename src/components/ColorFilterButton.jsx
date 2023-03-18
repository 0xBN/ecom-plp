import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductsContext } from '../contexts/ProductsContext';

const ColorFilterButton = ({ color, isActive }) => {
  const { setColorFilter } = useContext(ProductsContext);

  const handleColorFilterChange = (color) => setColorFilter(color);

  return (
    <button
      data-testid={`color-filter-button`}
      className={isActive ? 'active' : ''}
      onClick={() => handleColorFilterChange(color)}
    >
      <div
        className={`w-10 h-10 rounded-md border border-gray-500`}
        style={{ backgroundColor: color }}
      />
    </button>
  );
};

ColorFilterButton.propTypes = {
  color: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default ColorFilterButton;
