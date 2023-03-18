/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import { CartSVG } from '../svgs/';
import { handleMenuClick } from '../utils/helperFn';

const CartMenu = () => {
  const { cartItems, totalCost } = useContext(ProductsContext);

  const totalItems = cartItems.reduce((acc, val) => {
    acc = Number(acc);
    return Number((acc += val.quantity));
  }, 0);

  return (
    <div className='flex-none'>
      <div className='dropdown dropdown-end p-2'>
        <label tabIndex={0} className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <CartSVG />
            <span className='badge badge-sm indicator-item bg-red-800 text-white'>
              {totalItems}
            </span>
          </div>
        </label>
        <div
          tabIndex={0}
          className='mt-3 card card-compact dropdown-content w-40  shadow border grid place-content-center bg-white'
        >
          <div className='card-body '>
            <span className='font-bold text-lg text-black'>
              {totalItems} Items
            </span>
            <span className='text-black'>
              Subtotal: ${totalCost.toFixed(2)}
            </span>
            <div className='card-actions' onClick={handleMenuClick}>
              <Link to='/cart'>
                <button className='btn btn-primary btn-block bg-gradient-to-r from-blue-400 to-teal-500 border-0 font-extrabold'>
                  View cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartMenu;
