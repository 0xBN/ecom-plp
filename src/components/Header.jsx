import { useContext, useState } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import { CartSVG, FilterSVG } from '../svgs/';
import {
  ResetFilterButton,
  PriceRangeButton,
  SizeFilterButton,
  ColorFilterButton,
} from '../components';
import { priceRanges, sizes } from '../data/filterOptions';

const Header = () => {
  const {
    cartItems,
    totalCost,
    priceRange,
    sizeFilter,
    colorFilter,
    sortOrder,
    uniqueColorList = [],
    sortProductsByPriceLowToHigh,
    sortProductsByPriceHighToLow,
  } = useContext(ProductsContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    const elem = document.activeElement;
    if (elem) {
      setTimeout(() => {
        elem?.blur();
      }, 150);
    }
  };

  const totalItems = cartItems.reduce((acc, val) => {
    acc = Number(acc);

    return Number((acc += val.quantity));
  }, 0);

  return (
    <nav className={`md:flex justify-between sticky top-0 z-50`}>
      <div className='navbar justify-between bg-gradient-to-r from-blue-500 to-teal-700 drop-shadow-md'>
        {/* MAIN */}
        <Link to='/'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <FilterSVG />
            </label>
            <ul
              tabIndex='0'
              className='menu menu-compact dropdown-content mt-3 p-4 shadow rounded-box w-52 border text-black bg-white'
            >
              <p className={`font-bold`}>Shop By Price</p>
              <div className={`flex flex-wrap`}>
                {priceRanges.map(({ min, max }) => (
                  <li key={`${min}-${max}`} onClick={handleMenuClick}>
                    <PriceRangeButton
                      minPrice={min}
                      maxPrice={max}
                      isActive={
                        min === priceRange.min && max === priceRange.max
                      }
                    />
                  </li>
                ))}
              </div>

              <p className={`font-bold`}>Shop By Size</p>
              <div className={`flex flex-wrap`}>
                {sizes.map((size) => (
                  <li key={size} onClick={handleMenuClick}>
                    <SizeFilterButton
                      size={size}
                      isActive={size === sizeFilter}
                    />
                  </li>
                ))}
              </div>
              <p className={`font-bold`}>Shop By Color</p>
              <div className={`flex flex-wrap`} onClick={handleMenuClick}>
                {uniqueColorList.map((color) => (
                  <ColorFilterButton key={color} color={color} />
                ))}
              </div>
              <p className={`font-bold`}>Sort By Price</p>
              <div className={`flex flex-wrap`}>
                <li onClick={handleMenuClick}>
                  <button onClick={sortProductsByPriceLowToHigh}>
                    Price: Low to High
                  </button>
                </li>
                <li onClick={handleMenuClick}>
                  <button onClick={sortProductsByPriceHighToLow}>
                    Price: High to Low
                  </button>
                </li>
              </div>
              <div className={``} onClick={handleMenuClick}>
                <ResetFilterButton />
              </div>
              <br />
              <hr className={`p-2`} />
            </ul>
          </div>
        </Link>
        <div className=''>
          <Link to='/'>
            <h1 className='normal-case md:text-4xl text-2xl font-bold hover:text-yellow-400'>
              Chromatic Threads
            </h1>
          </Link>
        </div>
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
                    <button className='btn btn-primary btn-block bg-yellow-500 text-black hover:bg-yellow-300'>
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
