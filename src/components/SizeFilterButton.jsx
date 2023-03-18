import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const SizeFilterButton = ({ size, isActive }) => {
  const { setSizeFilter } = useContext(ProductsContext);
  const handleClick = () => setSizeFilter(size);

  return (
    <button
      className={`${isActive ? 'active' : ''} border`}
      onClick={handleClick}
    >
      Size {size}
    </button>
  );
};

SizeFilterButton.propTypes = {
  size: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SizeFilterButton;
