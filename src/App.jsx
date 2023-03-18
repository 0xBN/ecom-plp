import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import {
  ProductListingPage,
  ProductDetailPage,
  ShoppingCartPage,
  About,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className={`bg-gray-700 text-white min-h-screen`}>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListingPage />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
