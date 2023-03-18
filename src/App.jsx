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
      <div className={`bg-gray-700 text-white flex flex-col min-h-screen`}>
        <Header />
        <div className={`grow`}>
          <Routes>
            <Route path='/' element={<ProductListingPage />} />
            <Route path='/product/:id' element={<ProductDetailPage />} />
            <Route path='/cart' element={<ShoppingCartPage />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
