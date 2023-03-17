import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ResetFilterButton = () => {
  const { setPriceRange, setSizeFilter, setColorFilter } =
    useContext(ProductsContext);

  const handleResetClick = () => {
    setPriceRange({ min: 0, max: 100 });
    setSizeFilter(null);
    setColorFilter(null);
  };

  return <button onClick={handleResetClick}>Reset Filters</button>;
};

export default ResetFilterButton;
