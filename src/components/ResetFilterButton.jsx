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
    console.log({ originalOrder });
    setPriceRange({ min: 0, max: 100 });
    setSizeFilter(null);
    setColorFilter(null);
    setSortOrder(null);
    setProducts(originalOrder);
  };

  return (
    <button
      onClick={handleResetClick}
      className={`border bg-red-800 rounded-md hover:bg-red-500 text-white font-bold p-2 w-full`}
    >
      Reset Filters
    </button>
  );
};

export default ResetFilterButton;
