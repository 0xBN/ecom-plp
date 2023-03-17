import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import PriceRangeButton from './PriceRangeButton';
import SizeFilterButton from './SizeFilterButton';
import ColorFilterButton from './ColorFilterButton';
import { priceRanges, sizes } from '../data/filterOptions';

const FilterForm = () => {
  const { priceRange, sizeFilter, uniqueColorList } =
    useContext(ProductsContext);

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
            isActive={size === sizeFilter}
          />
        ))}
      </div>
      <div>
        {uniqueColorList.map((color) => (
          <ColorFilterButton key={color} color={color} />
        ))}
      </div>
    </div>
  );
};
export default FilterForm;
