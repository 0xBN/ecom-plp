import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import {
  ProductListingPage,
  ProductDetailPage,
  ShoppingCartPage,
  About,
} from './pages';

const App = () => {
  return (
    <Router>
      <div
        className={`bg-gray-700 text-white flex flex-col min-h-[calc(100vh-88px)]`}
      >
        <Header />
        <div className={``}>
          <Routes>
            <Route path='/' element={<ProductListingPage />} />
            <Route path='/product/:id' element={<ProductDetailPage />} />
            <Route path='/cart' element={<ShoppingCartPage />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
