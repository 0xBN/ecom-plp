import { ShoppingCart } from '../components';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ShoppingCartPage = () => {
  const { totalCost } = useContext(ProductsContext);
  const handleCheckout = () => alert('Checkout feature to be implemented');

  const checkoutButton = totalCost !== 0 && (
    <button
      className={`shadow-sm shadow-black/50 w-full bg-emerald-800 font-bold rounded-md p-4 sticky bottom-0 -translate-y-1 z-10 hover:brightness-125 text-2xl md:w-1/2 md:mx-auto`}
      onClick={handleCheckout}
    >
      Checkout ${totalCost.toFixed(2)}
    </button>
  );

  return (
    <div className={`min-h-[calc(100vh-120px)] flex flex-col relative`}>
      <div className={`p-2`}>
        <ShoppingCart />
      </div>
      <>{checkoutButton}</>
    </div>
  );
};

export default ShoppingCartPage;
