import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import PriceRangeButton from './PriceRangeButton';
import SizeFilterButton from './SizeFilterButton';
import ColorFilterButton from './ColorFilterButton';
import { priceRanges, sizes } from '../data/filterOptions';

const FilterForm = () => {
  const {
    priceRange,
    sizeFilter,
    uniqueColorList = [],
    sortProductsByPriceLowToHigh,
    sortProductsByPriceHighToLow,
  } = useContext(ProductsContext);

  const priceRangesMap = priceRanges.map(({ min, max }) => (
    <PriceRangeButton
      key={`${min}-${max}`}
      minPrice={min}
      maxPrice={max}
      isActive={min === priceRange.min && max === priceRange.max}
    />
  ));

  const sizesMap = sizes.map((size) => (
    <SizeFilterButton key={size} size={size} isActive={size === sizeFilter} />
  ));

  const uniqueColorMap = uniqueColorList.map((color) => (
    <ColorFilterButton key={color} color={color} />
  ));

  const sortButtons = (
    <>
      <button onClick={sortProductsByPriceLowToHigh}>Price: Low to High</button>
      <button onClick={sortProductsByPriceHighToLow}>Price: High to Low</button>
    </>
  );

  return (
    <div>
      <div className={`flex flex-col`}>{priceRangesMap}</div>
      <div>{sizesMap}</div>
      <div>{uniqueColorMap}</div>
      <hr />
      {sortButtons}
      <hr />
    </div>
  );
};
export default FilterForm;
