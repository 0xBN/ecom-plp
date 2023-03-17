import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ProductsProvider,
  ProductsContext,
} from '../../contexts/ProductsContext';
import FilterForm from '../FilterForm';
import PriceRangeButton from '../PriceRangeButton';

describe('FilterForm', () => {
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
