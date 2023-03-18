import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import { RemoveItemSVG } from '../svgs';

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
      <hr className={`border border-gray-500`} />
      <h2 className={`text-center text-2xl font-bold`}>My Cart</h2>

      {cartItems.length === 0 && (
        <Link to={`/`}>
          <p className={`hover:underline`}>
            Your cart is empty. Check out our amazing collection!
          </p>
        </Link>
      )}

      {cartItems.length > 0 && (
        <div className={``}>
          <table className='border-spacing-1 divide-y divide-gray-200 border-separate mx-auto'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Size</th>
                <th>Price</th>
                <th>Qty</th>
                {/* <th>Subtotal</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody className={`items-center`}>
              {cartItems.map((item) => (
                <tr className={`border`} key={item.id + item.size}>
                  <td
                    className={`hover:underline border rounded-md text-center flex justify-center items-center hover:bg-emerald-900`}
                  >
                    <Link to={`/product/${item.id}`}>
                      <span>
                        <img
                          className={`w-28 h-28 md:w-32 md:h-32 object-cover`}
                          src={item.image}
                          alt=''
                        />
                      </span>
                      <span className={`text-sm`}>{item.name}</span>
                    </Link>
                  </td>
                  <td className='text-center'>{item.size}</td>
                  <td className='text-center'>${item.price.toFixed(2)}</td>
                  <td className='text-center'>
                    <input
                      type='number'
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value, item.size)
                      }
                      min='1'
                      name='quantity'
                      className={`w-8 bg-emerald-900 rounded-md text-center border font-bold`}
                    />
                  </td>
                  {/* <td className='text-center'>${item.totalCost.toFixed(2)}</td> */}
                  <td className={`translate-y-0.5`}>
                    <button onClick={() => handleRemoveClick(item.id)}>
                      <RemoveItemSVG />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
