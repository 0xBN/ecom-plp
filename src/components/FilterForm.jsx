import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import PriceRangeButton from './PriceRangeButton';
import SizeFilterButton from './SizeFilterButton';

const FilterForm = () => {
  const { priceRange, currentSize, setCurrentSize } =
    useContext(ProductsContext);

  const priceRanges = [
    { min: 0, max: 10 },
    { min: 10, max: 20 },
    { min: 20, max: 30 },
    { min: 30, max: 40 },
    { min: 40, max: 50 },
    { min: 50, max: 60 },
    { min: 60, max: 70 },
    { min: 70, max: 80 },
    { min: 80, max: 90 },
    { min: 90, max: 100 },
  ];

  const sizes = ['S', 'M', 'L'];

  return (
    <div>
      <h2>Filter Form</h2>
      <div>
        {priceRanges.map(({ min, max }) => (
          <PriceRangeButton
            key={`${min}-${max}`}
            minPrice={min}
            maxPrice={max}
            isActive={min === priceRange.min && max === priceRange.max}
          />
        ))}
      </div>
      <div>
        {sizes.map((size) => (
          <SizeFilterButton
            key={size}
            size={size}
            isActive={size === currentSize}
            onClick={() => setCurrentSize(size)}
          />
        ))}
      </div>
    </div>
  );
};
export default FilterForm;
