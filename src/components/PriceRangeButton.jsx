import React, { useContext } from 'react';
import { formatPrice } from '../utils/helperFn';
import { ProductsContext } from '../contexts/ProductsContext';
import PropTypes from 'prop-types';

const PriceRangeButton = ({ minPrice, maxPrice, isActive }) => {
  const min = formatPrice(minPrice);
  const max = formatPrice(maxPrice);

  const { setPriceRange } = useContext(ProductsContext);

  const handlePriceRangeClick = () => {
    setPriceRange({ min: minPrice, max: maxPrice });
  };

  const buttonText = minPrice === 0 ? 'Below $10' : `${min} - ${max}`;

  return (
    <button
      className={`${isActive ? 'active' : ''} border`}
      onClick={handlePriceRangeClick}
    >
      {buttonText}
    </button>
  );
};

PriceRangeButton.propTypes = {
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default PriceRangeButton;
