import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ColorFilterButton = ({ color, isActive }) => {
  const { setColorFilter } = useContext(ProductsContext);

  const handleColorFilterChange = (color) => {
    setColorFilter(color);
  };

  return (
    <button
      data-testid={`color-filter-button`}
      className={isActive ? 'active' : ''}
      onClick={() => handleColorFilterChange(color)}
    >
      {color}
    </button>
  );
};

export default ColorFilterButton;
