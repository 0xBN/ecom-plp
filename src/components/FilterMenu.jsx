/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import { FilterSVG } from '../svgs/';
import {
  ResetFilterButton,
  PriceRangeButton,
  SizeFilterButton,
  ColorFilterButton,
} from '../components';
import { priceRanges, sizes } from '../data/filterOptions';
import { handleMenuClick } from '../utils/helperFn';

const FilterMenu = () => {
  const {
    priceRange,
    sizeFilter,
    uniqueColorList = [],
    sortProductsByPriceLowToHigh,
    sortProductsByPriceHighToLow,
  } = useContext(ProductsContext);

  const menuIcon = (
    <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
      <FilterSVG />
    </label>
  );

  const shopByPrice = (
    <>
      <p className={`font-bold`}>Shop By Price</p>
      <div className={`flex flex-wrap`}>
        {priceRanges.map(({ min, max }) => (
          <li key={`${min}-${max}`} onClick={handleMenuClick}>
            <PriceRangeButton
              minPrice={min}
              maxPrice={max}
              isActive={min === priceRange.min && max === priceRange.max}
            />
          </li>
        ))}
      </div>
    </>
  );

  const shopBySize = (
    <>
      <p className={`font-bold`}>Shop By Size</p>
      <div className={`flex flex-wrap`}>
        {sizes.map((size) => (
          <li key={size} onClick={handleMenuClick}>
            <SizeFilterButton size={size} isActive={size === sizeFilter} />
          </li>
        ))}
      </div>
    </>
  );

  const shopByColor = (
    <>
      <p className={`font-bold`}>Shop By Color</p>
      <div className={`flex flex-wrap`} onClick={handleMenuClick}>
        {uniqueColorList.map((color) => (
          <ColorFilterButton key={color} color={color} />
        ))}
      </div>
    </>
  );

  const sortByPrice = (
    <>
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
    </>
  );

  return (
    <Link to='/'>
      <div className='dropdown'>
        {menuIcon}
        <ul
          tabIndex='0'
          className='menu menu-compact dropdown-content mt-3 p-4 shadow rounded-box w-52 border text-black bg-white'
        >
          <div>{shopByPrice}</div>
          <div>{shopBySize}</div>
          <div>{shopByColor}</div>
          <div>{sortByPrice}</div>
          <div onClick={handleMenuClick}>
            <ResetFilterButton />
          </div>
          <br />
          <hr className={`p-2`} />
        </ul>
      </div>
    </Link>
  );
};
export default FilterMenu;
