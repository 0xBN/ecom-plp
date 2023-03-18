import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductList = ({ products }) => {
  const { priceRange, sizeFilter, colorFilter, sortOrder } =
    useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filterProducts = () => {
      let filteredProductsByPrice = products?.filter((product) => {
        const priceInRange =
          product.price >= priceRange.min && product.price <= priceRange.max;
        const sizeMatch =
          sizeFilter === null ||
          (product.sizes && product.sizes.includes(sizeFilter));
        const colorMatch =
          colorFilter === null || product.color === colorFilter;
        return priceInRange && sizeMatch && colorMatch;
      });

      if (sortOrder === 'lowToHigh') {
        filteredProductsByPrice.sort((a, b) => a.price - b.price);
      } else if (sortOrder === 'highToLow') {
        filteredProductsByPrice.sort((a, b) => b.price - a.price);
      }

      setFilteredProducts(filteredProductsByPrice);
    };
    filterProducts();
  }, [priceRange, sizeFilter, colorFilter, sortOrder, products]);

  const productList = filteredProducts?.map((product) => (
    <li key={product.id}>
      <ProductItem
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        description={product.description}
        sizes={product.sizes}
        color={product.color}
      />
    </li>
  ));

  return (
    <div>
      {!productList?.length && <p>No products found</p>}
      <ul className={`md:grid md:grid-cols-4 sm:grid-cols-3 gap-2`}>
        {productList}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      sizes: PropTypes.arrayOf(PropTypes.string),
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ProductList;
