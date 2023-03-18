import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const SizeFilterButton = ({ size, isActive }) => {
  const { setSizeFilter } = useContext(ProductsContext);

  const handleClick = () => {
    setSizeFilter(size);
  };

  return (
    <button
      className={`${isActive ? 'active' : ''} border`}
      onClick={handleClick}
    >
      Size {size}
    </button>
  );
};

export default SizeFilterButton;
