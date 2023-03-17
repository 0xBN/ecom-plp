import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
  ProductsProvider,
  ProductsContext,
} from '../../contexts/ProductsContext';
import SizeFilterButton from '../SizeFilterButton';

describe('SizeFilterButton', () => {
  it('renders button text', () => {
    render(
      <ProductsProvider>
        <SizeFilterButton size='S' isActive={false} />
      </ProductsProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('S');
  });

  it('calls setSizeFilter when clicked', () => {
    const setSizeFilter = jest.fn();
    render(
      <ProductsContext.Provider value={{ setSizeFilter }}>
        <SizeFilterButton size='M' isActive={false} />
      </ProductsContext.Provider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setSizeFilter).toHaveBeenCalledWith('M');
  });

  it('renders an active button', () => {
    render(
      <ProductsProvider>
        <SizeFilterButton size='L' isActive={true} />
      </ProductsProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('active');
  });
});
