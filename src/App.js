import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';
import products from './data/products.json';

const App = () => {
  const testProduct = {
    name: 'Name of product',
    price: 10,
    image: '',
    description: 'test description',
    color: 'red',
    sizes: ['S', 'M'],
  };

  return (
    <div>
      <ProductItem product={testProduct} />
      <ProductList products={products} />
    </div>
  );
};
export default App;
