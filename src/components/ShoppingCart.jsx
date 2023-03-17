import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ShoppingCart = () => {
  const {
    cartItems,
    totalCost,
    sizesTotalCost,
    removeFromCart,
    setCartItems,
    updateTotalCost,
    updateSizesTotalCost,
  } = useContext(ProductsContext);

  const handleRemoveClick = (id, size) => {
    // remove the item with the given id from the cart
    removeFromCart(id, size);
  };

  const handleQuantityChange = (id, quantity, size) => {
    // update the quantity of the item with the given id in the cart

    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.size === size) {
        return {
          ...item,
          quantity,
          totalCost: item.price * quantity,
        };
      } else {
        return item;
      }
    });
    setCartItems(updatedCartItems);
    updateTotalCost(updatedCartItems);
    updateSizesTotalCost(updatedCartItems);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id + item.size}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.size}</td>
                  <td>
                    <input
                      type='number'
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value, item.size)
                      }
                      min='1'
                      name='quantity'
                    />
                  </td>
                  <td>${item.totalCost.toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemoveClick(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <p>Total: ${totalCost.toFixed(2)}</p>
            {Object.entries(sizesTotalCost).map(([size, cost]) => (
              <p key={size}>
                Total for {size}: ${cost.toFixed(2)}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
