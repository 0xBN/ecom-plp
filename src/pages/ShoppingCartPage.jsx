import { ShoppingCart } from '../components';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ShoppingCartPage = () => {
  const { totalCost } = useContext(ProductsContext);
  const handleCheckout = () => alert('Checkout feature to be implemented');

  const checkoutButton = totalCost !== 0 && (
    <button
      className={`border border-slate-400 bg-emerald-800 font-bold rounded-md p-4 w-full mx-auto sticky bottom-0 z-10 hover:brightness-125 text-2xl`}
      onClick={handleCheckout}
    >
      Checkout ${totalCost.toFixed(2)}
    </button>
  );

  return (
    <div className={`min-h-[calc(100vh-120px)] flex flex-col relative`}>
      <div>
        <ShoppingCart />
      </div>
      <div>{checkoutButton}</div>
    </div>
  );
};

export default ShoppingCartPage;
