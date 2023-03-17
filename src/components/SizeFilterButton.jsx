import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const SizeFilterButton = ({ size, isActive }) => {
  const { setSizeFilter } = useContext(ProductsContext);

  const handleClick = () => {
    setSizeFilter(size);
  };

  return (
    <button className={isActive ? 'active' : ''} onClick={handleClick}>
      {size}
    </button>
  );
};

export default SizeFilterButton;