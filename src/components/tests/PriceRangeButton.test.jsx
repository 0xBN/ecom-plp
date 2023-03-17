import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PriceRangeButton from '../PriceRangeButton';
import { ProductsContext } from '../../contexts/ProductsContext';

describe('PriceRangeButton', () => {
  it('renders button text', () => {
    const setPriceRange = jest.fn();
    const priceRange = { min: 0, max: 10 };

    render(
      <ProductsContext.Provider value={{ setPriceRange, priceRange }}>
        <PriceRangeButton minPrice={0} maxPrice={10} isActive={false} />
      </ProductsContext.Provider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Below $10');
  });

  it('calls setPriceRange when clicked', () => {
    const setPriceRange = jest.fn();
    const priceRange = { min: 0, max: 10 };

    render(
      <ProductsContext.Provider value={{ setPriceRange, priceRange }}>
        <PriceRangeButton minPrice={0} maxPrice={10} isActive={false} />
      </ProductsContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setPriceRange).toHaveBeenCalled();
  });
});
