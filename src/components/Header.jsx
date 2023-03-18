import { Link } from 'react-router-dom';
import { FilterMenu, CartMenu } from '../components';

const Header = () => {
  const logo = (
    <div className=''>
      <Link to='/'>
        <h1 className='normal-case md:text-4xl text-2xl font-bold hover:text-yellow-400'>
          Chromatic Threads
        </h1>
      </Link>
    </div>
  );

  return (
    <nav className={`md:flex justify-between sticky top-0 z-50`}>
      <ul className='navbar justify-between bg-gradient-to-r from-blue-500 to-teal-700 drop-shadow-md'>
        <li>
          <FilterMenu />
        </li>
        <li>{logo}</li>
        <li>
          <CartMenu />
        </li>
      </ul>
    </nav>
  );
};
export default Header;
