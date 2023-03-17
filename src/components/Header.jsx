import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cartItems } = useContext(ProductsContext);
  return (
    <nav className={`md:flex justify-between`}>
      <div className={`text-xl md:text-4xl text-center font-bold p-4`}>
        <Link to='/'>Chromatic Threads</Link>
      </div>
      <div className={`p-4`}>
        <Link to='/cart'>View Cart</Link>

        <div>Items: {cartItems.length}</div>
      </div>
    </nav>
  );
};
export default Header;
