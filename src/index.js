import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './contexts/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProductsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductsProvider>
  </BrowserRouter>
);
