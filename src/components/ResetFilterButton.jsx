import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ResetFilterButton = () => {
  const {
    setPriceRange,
    setSizeFilter,
    setColorFilter,
    setSortOrder,
    setProducts,
    originalOrder,
  } = useContext(ProductsContext);

  const handleResetClick = () => {
    setPriceRange({ min: 0, max: 100 });
    setSizeFilter(null);
    setColorFilter(null);
    setSortOrder(null);
    setProducts(originalOrder);
  };

  return <button onClick={handleResetClick}>Reset Filters</button>;
};

export default ResetFilterButton;
