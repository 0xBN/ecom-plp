import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ProductList from '../ProductList';
import PriceRangeButton from '../PriceRangeButton';
import { ProductsProvider } from '../../contexts/ProductsContext';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('ProductList', () => {
  const products = [
    { id: 1, name: 'Product A', price: 10, image: 'product-a.jpg' },
    { id: 2, name: 'Product B', price: 20, image: 'product-b.jpg' },
    { id: 3, name: 'Product C', price: 30, image: 'product-c.jpg' },
  ];

  it('renders a message when there are no products', () => {
    render(
      <ProductsProvider>
        <ProductList products={[]} />
      </ProductsProvider>
    );
    const noProductsMessage = screen.getByText(/no products found/i);
    expect(noProductsMessage).toBeInTheDocument();
  });

  it('renders a list of products', async () => {
    render(
      <ProductsProvider>
        <ProductList products={products} />
      </ProductsProvider>
    );
    const productList = screen.getByRole('list');
    expect(productList).toBeInTheDocument();

    // Wait for the product items to appear
    await waitFor(() => {
      const productItems = screen.getAllByRole('listitem');
      expect(productItems).toHaveLength(3);
    });
  });

  it('renders the name, price, and image of each product', () => {
    render(
      <ProductsProvider>
        <ProductList products={products} />
      </ProductsProvider>
    );
    const productListItems = screen.getAllByRole('listitem');
    expect(productListItems).toHaveLength(3);
    expect(productListItems[0]).toHaveTextContent('Product A');
    expect(productListItems[0]).toHaveTextContent('$10');
    expect(productListItems[0]).toContainHTML('<img src="product-a.jpg"');
    expect(productListItems[1]).toHaveTextContent('Product B');
    expect(productListItems[1]).toHaveTextContent('$20');
    expect(productListItems[1]).toContainHTML('<img src="product-b.jpg"');
    expect(productListItems[2]).toHaveTextContent('Product C');
    expect(productListItems[2]).toHaveTextContent('$30');
    expect(productListItems[2]).toContainHTML('<img src="product-c.jpg"');
  });

  it('renders a list of products within the provided price range', async () => {
    render(
      <ProductsProvider>
        <PriceRangeButton minPrice={10} maxPrice={20} />
        <ProductList products={products} />
      </ProductsProvider>
    );

    const productList = screen.getByRole('list');
    expect(productList).toBeInTheDocument();

    const priceRangeButton = screen.getByRole('button', {
      name: /\$10 - \$20/,
    });
    fireEvent.click(priceRangeButton);

    await waitFor(() => {
      const productItems = screen.getAllByRole('listitem');
      expect(productItems).toHaveLength(2);
    });
  });

  // END
});
