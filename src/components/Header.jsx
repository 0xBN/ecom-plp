import { useContext } from 'react';
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

  const totalItems = cartItems.reduce((acc, val) => (acc += val.quantity), 0);

  return (
    <nav className={`md:flex justify-between sticky top-0 z-50`}>
      <div className='navbar justify-between bg-gradient-to-r from-blue-500 to-teal-700 drop-shadow-md'>
        {/* MAIN */}
        <div className='dropdown '>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <FilterSVG />
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 border '
          >
            <p className={`font-bold`}>Shop By Price</p>
            <div className={`flex flex-wrap`}>
              {priceRanges.map(({ min, max }) => (
                <li key={`${min}-${max}`}>
                  <PriceRangeButton
                    minPrice={min}
                    maxPrice={max}
                    isActive={min === priceRange.min && max === priceRange.max}
                  />
                </li>
              ))}
              <li>
                <button onClick={sortProductsByPriceLowToHigh}>
                  Price: Low to High
                </button>
              </li>
              <li>
                <button onClick={sortProductsByPriceHighToLow}>
                  Price: High to Low
                </button>
              </li>
            </div>
            <p className={`font-bold`}>Shop By Size</p>
            <div className={`flex flex-wrap`}>
              {sizes.map((size) => (
                <li key={size}>
                  <SizeFilterButton
                    size={size}
                    isActive={size === sizeFilter}
                  />
                </li>
              ))}
            </div>
            <p className={`font-bold`}>Shop By Color</p>
            <div className={`flex flex-wrap`}>
              {uniqueColorList.map((color) => (
                <ColorFilterButton key={color} color={color} />
              ))}
            </div>
            <br />
            <hr className={`p-2`} />
            <p className={`font-bold`}>Current Filters</p>
            <li className={`pointer-events-none`}>
              <p>
                Between:{' '}
                {priceRange.min === 0 && priceRange.max === 1000
                  ? 'All'
                  : `${priceRange.min} - ${priceRange.max}`}
              </p>
            </li>
            <li className={`pointer-events-none`}>
              <p>Size: {sizeFilter || 'All'}</p>
              <p>Color: {colorFilter || 'All'}</p>
              <p>Sort: {sortOrder || 'All'}</p>
            </li>

            <ResetFilterButton />
          </ul>
        </div>
        {/* TEST */}
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
              className='mt-3 card card-compact dropdown-content w-40 bg-base-100 shadow border grid place-content-center'
            >
              <div className='card-body'>
                <span className='font-bold text-lg'>{totalItems} Items</span>
                <span className='text-white'>
                  Subtotal: ${totalCost.toFixed(2)}
                </span>
                <div className='card-actions'>
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
