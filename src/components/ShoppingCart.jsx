import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import { RemoveItemSVG } from '../svgs';

const ShoppingCart = () => {
  const {
    cartItems,
    removeFromCart,
    setCartItems,
    updateTotalCost,
    updateSizesTotalCost,
  } = useContext(ProductsContext);

  const handleRemoveClick = (id, size) => removeFromCart(id, size);

  const handleQuantityChange = (id, quantity, size) => {
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

  const emptyCartMessage = (
    <Link to={`/`}>
      <p className={`hover:underline text-center p-4`}>
        Your cart is empty. Check out our amazing collection!
      </p>
    </Link>
  );

  const cartItemsMap = cartItems.map((item) => (
    <tr className={`border`} key={item.id + item.size}>
      <td
        className={`hover:underline border rounded-md text-center flex justify-center items-center hover:bg-gradient-to-r from-blue-500 to-teal-700 w-35 h-35 md:w-44 md:h-44 mx-auto py-4`}
      >
        <Link to={`/product/${item.id}`}>
          <span>
            <img
              className={`w-28 h-28 md:w-32 md:h-32 object-cover rounded-sm`}
              src={item.image}
              alt=''
            />
          </span>
          <span className={`text-sm`}>{item.name}</span>
        </Link>
      </td>
      <td className='text-center'>{item.size}</td>

      <td className='text-center'>
        <input
          type='number'
          value={item.quantity}
          onChange={(e) =>
            handleQuantityChange(item.id, e.target.value, item.size)
          }
          min='1'
          name='quantity'
          className={`w-10 h-10 rounded-md text-center shadow-sm shadow-black/50 font-bold text-black bg-white`}
        />
      </td>
      <td className='text-center'>${item.price.toFixed(2)}</td>
      <td className={`translate-y-0.5 translate-x-1 `}>
        <button onClick={() => handleRemoveClick(item.id)}>
          <RemoveItemSVG />
        </button>
      </td>
    </tr>
  ));

  const cartTableHead = (
    <thead>
      <tr>
        <th>Item</th>
        <th>Size</th>
        <th>Qty</th>
        <th>Each</th>
      </tr>
    </thead>
  );
  const cartTableBody = (
    <tbody className={`items-center`}>{cartItemsMap}</tbody>
  );

  const cartTable = (
    <table className='border-spacing-1 divide-y divide-gray-200 border-separate mx-auto w-full max-w-3xl'>
      {cartTableHead}
      {cartTableBody}
    </table>
  );

  const cartPageTitle = (
    <h2 className={`text-center text-2xl font-bold p-2`}>My Cart</h2>
  );

  return (
    <div>
      <div>{cartPageTitle}</div>
      <div>{cartItems.length === 0 && emptyCartMessage}</div>
      <div>
        {cartItems.length > 0 && (
          <div>
            {cartTable}
            <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
