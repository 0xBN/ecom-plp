import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const useFilterProducts = () => {
  const { products, priceRange, sizeFilter, colorFilter } =
    useContext(ProductsContext);

  const filteredProducts = products.filter((product) => {
    const inPriceRange =
      product.price >= priceRange.min && product.price <= priceRange.max;

    const hasSizeFilter = !sizeFilter || product.size === sizeFilter;
    const hasColorFilter = !colorFilter || product.color === colorFilter;

    return inPriceRange && hasSizeFilter && hasColorFilter;
  });

  return { filteredProducts };
};

export default useFilterProducts;
