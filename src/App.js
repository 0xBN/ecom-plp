import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';
import products from './data/products.json';
import FilterForm from './components/FilterForm';
import { ProductsContext } from './contexts/ProductsContext';
import { useContext } from 'react';
import ResetFilterButton from './components/ResetFilterButton';

const App = () => {
  const { priceRange, sizeFilter, colorFilter } = useContext(ProductsContext);
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
      <hr />
      <div>
        temp stuff
        <p>{JSON.stringify(priceRange)}</p>
        <p>{sizeFilter}</p>
        <p>{colorFilter}</p>
      </div>
      <ResetFilterButton />
      <hr />
      <FilterForm />
      <ProductList products={products} />
    </div>
  );
};
export default App;
