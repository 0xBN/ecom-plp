import { ShoppingCart } from '../components';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ShoppingCartPage = () => {
  const { totalCost } = useContext(ProductsContext);
  return (
    <div className={`min-h-[88vh] flex flex-col relative`}>
      <ShoppingCart />

      {totalCost !== 0 && (
        <button
          className={`border bg-emerald-800 font-bold rounded-sm p-4 w-full mx-auto sticky bottom-0 z-10 hover:brightness-125`}
        >
          Checkout ${totalCost.toFixed(2)}
        </button>
      )}
    </div>
  );
};
export default ShoppingCartPage;
