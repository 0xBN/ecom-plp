import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';
import { ProductsProvider } from '../../contexts/ProductsContext';

describe('ShoppingCart', () => {
  it('should add the selected product to the cart and update the total cost', () => {
    render(
      <ProductsProvider>
        <ShoppingCart />
      </ProductsProvider>
    );

    const product = {
      id: 1,
      name: 'Product 1',
      price: 10,
      image: 'product1.jpg',
      description: 'This is product 1',
      sizes: ['S', 'M', 'L'],
      color: 'red',
    };

    const size = 'M';

    const addToCartButton = screen.getByRole('button', {
      name: /add to cart/i,
    });

    // Click on the "Add to Cart" button
    fireEvent.click(addToCartButton);

    // Select the size
    const sizeSelect = screen.getByLabelText('Select Size');
    fireEvent.change(sizeSelect, { target: { value: size } });

    // Click on the "Add to Cart" button again
    fireEvent.click(addToCartButton);

    // Verify that the cart now contains the selected product and the total cost has been updated
    const cartItems = screen.getAllByRole('listitem', { name: /cart item/i });
    expect(cartItems).toHaveLength(1);

    const cartTotalCost = screen.getByText(/total cost/i);
    expect(cartTotalCost).toHaveTextContent(`Total Cost: $${product.price}`);
  });
});
