import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProductsContext } from '../../contexts/ProductsContext';
import ColorFilterButton from '../ColorFilterButton';

describe('ColorFilterButton', () => {
  it('renders button text', () => {
    render(
      <ProductsContext.Provider value={{}}>
        <ColorFilterButton color='Red' isActive={false} />
      </ProductsContext.Provider>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Red');
  });

  it('calls setColorFilter when clicked', () => {
    const setColorFilter = jest.fn();
    render(
      <ProductsContext.Provider value={{ setColorFilter }}>
        <ColorFilterButton color='Red' isActive={false} />
      </ProductsContext.Provider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setColorFilter).toHaveBeenCalledWith('Red');
  });

  it('renders an active button', () => {
    render(
      <ProductsContext.Provider value={{}}>
        <ColorFilterButton color='Red' isActive={true} />
      </ProductsContext.Provider>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('active');
  });
});
