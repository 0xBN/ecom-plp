import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
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
      {!products.length && <p>No products found</p>}
      <ul>{productList}</ul>
    </div>
  );
};
export default ProductList;
