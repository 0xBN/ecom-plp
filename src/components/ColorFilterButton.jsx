import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ColorFilterButton = ({ color, isActive }) => {
  const { setColorFilter } = useContext(ProductsContext);

  const handleColorFilterChange = (color) => {
    setColorFilter(color);
  };

  const colorStyle = {
    backgroundColor: color,
  };

  return (
    <button
      data-testid={`color-filter-button`}
      className={isActive ? 'active' : ''}
      onClick={() => handleColorFilterChange(color)}
    >
      <div
        className={`w-10 h-10 rounded-md border border-gray-500`}
        style={colorStyle}
      />
    </button>
  );
};

export default ColorFilterButton;
