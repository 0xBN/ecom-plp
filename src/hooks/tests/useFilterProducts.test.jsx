import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  ProductsProvider,
  ProductsContext,
} from '../../contexts/ProductsContext';
import useFilterProducts from '../useFilterProducts';
import ProductList from '../../components/ProductList';

xdescribe('useFilterProducts hook', () => {
  xit('should filter by price correctly', () => {
    const someProductsState = {
      products: [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
        { id: 4, name: 'Product 4', price: 40 },
      ],
      priceRange: { min: 10, max: 30 },
    };

    const TestComponent = () => {
      const { products } = React.useContext(ProductsContext);
      const filteredProducts = useFilterProducts();
      return <ProductList products={filteredProducts} />;
    };

    render(
      <ProductsProvider value={someProductsState}>
        <TestComponent />
      </ProductsProvider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.queryByText('Product 3')).toBeNull();
    expect(screen.queryByText('Product 4')).toBeNull();
  });
});
