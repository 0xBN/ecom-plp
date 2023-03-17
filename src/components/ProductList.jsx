import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductList = ({ products }) => {
  const { priceRange, sizeFilter, colorFilter } = useContext(ProductsContext);

  const filteredProducts = products.filter((product) => {
    const priceInRange =
      product.price >= priceRange.min && product.price <= priceRange.max;
    const sizeMatch =
      sizeFilter === null ||
      (product.sizes && product.sizes.includes(sizeFilter));

    const colorMatch = colorFilter === null || product.color === colorFilter;
    return priceInRange && sizeMatch && colorMatch;
  });

  const productList = filteredProducts?.map((product) => (
    <li key={product.id}>
      <Link to={`/product/${product.id}`}>
        <ProductItem
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          sizes={product.sizes}
          color={product.color}
        />
      </Link>
    </li>
  ));

  return (
    <div>
      <h2>List</h2>
      {!productList.length && <p>No products found</p>}
      <ul>{productList}</ul>
    </div>
  );
};
export default ProductList;
