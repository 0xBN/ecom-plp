import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import {
  ProductsProvider,
  ProductsContext,
} from '../../contexts/ProductsContext';
import FilterForm from '../FilterForm';
import PriceRangeButton from '../PriceRangeButton';
import products from '../../data/products.json';

describe('FilterForm renders price range buttons', () => {
  it('renders the first price range button Below $10', () => {
    const minPrice = 0;
    const maxPrice = 10;
    const isActive = true;
    render(
      <ProductsContext.Provider value={{ priceRange: { min: 0, max: 10 } }}>
        <PriceRangeButton
          minPrice={minPrice}
          maxPrice={maxPrice}
          isActive={isActive}
        />
      </ProductsContext.Provider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(`Below $10`);
    expect(button).toHaveClass('active');
  });

  it('calls setPriceRange when clicked', () => {
    const setPriceRange = jest.fn();
    const minPrice = 0;
    const maxPrice = 10;
    const isActive = false;
    render(
      <ProductsContext.Provider
        value={{ priceRange: { min: 20, max: 30 }, setPriceRange }}
      >
        <PriceRangeButton
          minPrice={minPrice}
          maxPrice={maxPrice}
          isActive={isActive}
        />
      </ProductsContext.Provider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setPriceRange).toHaveBeenCalled();
  });
});
describe('FilterForm renders size filter buttons', () => {
  it('renders SizeFilterButton', () => {
    render(
      <ProductsProvider>
        <FilterForm />
      </ProductsProvider>
    );

    const sizeFilterButtons = screen.queryAllByRole('button', {
      name: /size/i,
    });
    expect(sizeFilterButtons).not.toHaveLength(0);
  });
});

describe('renders color filter buttons', () => {
  it('renders all color filter buttons', async () => {
    render(
      <ProductsProvider>
        <FilterForm />
      </ProductsProvider>
    );

    await waitFor(() => {
      const colorFilterButtons = screen.queryAllByTestId('color-filter-button');
      const uniqueColors = Array.from(
        new Set(products.map((product) => product.color))
      );

      expect(colorFilterButtons).toHaveLength(uniqueColors.length);

      uniqueColors.forEach((color) => {
        expect(screen.getByText(color)).toBeInTheDocument();
      });
    });
  });
});
