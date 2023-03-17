import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ColorFilterButton = ({ color, isActive }) => {
  const { setColorFilter } = useContext(ProductsContext);

  const handleClick = () => {
    setColorFilter(color);
  };

  return (
    <button className={isActive ? 'active' : ''} onClick={handleClick}>
      {color}
    </button>
  );
};

export default ColorFilterButton;
