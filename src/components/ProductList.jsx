import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductList = ({ products }) => {
  const { priceRange, sizeFilter, colorFilter, sortOrder } =
    useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filterProducts = () => {
      let filteredProductsByPrice = products.filter((product) => {
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
      {/* <Link to={`/product/${product.id}`}> */}
      <ProductItem
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        description={product.description}
        sizes={product.sizes}
        color={product.color}
      />
      {/* </Link> */}
    </li>
  ));

  return (
    <div className={``}>
      {!productList?.length && <p>No products found</p>}
      <ul className={`md:grid md:grid-cols-4 sm:grid-cols-3`}>{productList}</ul>
    </div>
  );
};
export default ProductList;
