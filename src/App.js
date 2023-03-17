import ProductItem from './components/ProductItem';
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
    </div>
  );
};
export default App;
