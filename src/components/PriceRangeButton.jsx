import React, { useContext } from 'react';
import { formatPrice } from '../utils/helperFn';
import { ProductsContext } from '../contexts/ProductsContext';

const PriceRangeButton = ({ minPrice, maxPrice, isActive }) => {
  const min = formatPrice(minPrice);
  const max = formatPrice(maxPrice);

  const { setPriceRange } = useContext(ProductsContext);

  const handlePriceRangeClick = (min, max) => {
    setPriceRange({ min, max });
  };

  const buttonText = minPrice === 0 ? 'Below $10' : `${min} - ${max}`;

  return (
    <button
      className={isActive ? 'active' : ''}
      onClick={handlePriceRangeClick}
    >
      {buttonText}
    </button>
  );
};

export default PriceRangeButton;
