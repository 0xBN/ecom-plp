import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';
import products from './data/products.json';
import FilterForm from './components/FilterForm';
import { ProductsContext } from './contexts/ProductsContext';
import { useContext } from 'react';
import ResetFilterButton from './components/ResetFilterButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import {
  ProductListingPage,
  ProductDetailPage,
  ShoppingCartPage,
  About,
} from './pages';

const App = () => {
  const { priceRange, sizeFilter, colorFilter, sortOrder } =
    useContext(ProductsContext);

  return (
    <BrowserRouter>
      <div className={`bg-slate-800 text-white min-h-screen`}>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListingPage />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
