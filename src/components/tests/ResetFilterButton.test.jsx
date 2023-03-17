import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {
  ProductsProvider,
  ProductsContext,
} from '../../contexts/ProductsContext';
import ResetFilterButton from '../ResetFilterButton';
import ProductList from '../ProductList';
import PriceRangeButton from '../PriceRangeButton';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('ResetFilterButton', () => {
  it('renders a reset button', () => {
    render(
      <ProductsProvider>
        <ResetFilterButton />
      </ProductsProvider>
    );

    const resetButton = screen.getByRole('button', { name: /reset/i });
    expect(resetButton).toBeInTheDocument();
  });

  it('resets the state of the filter', async () => {
    const products = [
      { id: 1, name: 'Product A', price: 10, image: 'product-a.jpg' },
      { id: 2, name: 'Product B', price: 20, image: 'product-b.jpg' },
      { id: 3, name: 'Product C', price: 30, image: 'product-c.jpg' },
    ];
    render(
      <ProductsProvider>
        <ResetFilterButton />
        <ProductList products={products} />
        <PriceRangeButton minPrice={10} maxPrice={20} isActive={false} />
      </ProductsProvider>
    );

    const priceRangeButton = screen.getByRole('button', {
      name: /\$10 - \$20/,
    });

    let productItems = screen.getAllByRole('listitem');
    expect(productItems).toHaveLength(3);

    fireEvent.click(priceRangeButton);

    await waitFor(() => {
      productItems = screen.getAllByRole('listitem');
      expect(productItems).toHaveLength(2);
    });

    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });
    fireEvent.click(resetButton);

    await waitFor(() => {
      productItems = screen.getAllByRole('listitem');
      expect(productItems).toHaveLength(3);
    });
  });

  // END
});
