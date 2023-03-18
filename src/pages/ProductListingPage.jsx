import { useContext } from 'react';
import { ProductsContext } from './../contexts/ProductsContext';
import { ResetFilterButton, FilterForm, ProductList } from '../components';
// import products from './../data/products.json';

const ProductListingPage = () => {
  const { priceRange, sizeFilter, colorFilter, sortOrder, products } =
    useContext(ProductsContext);
  return (
    <div className={`max-w-7xl mx-auto`}>
      <div className={`relative `}>
        <img
          src='https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg'
          alt='geometric shapes'
          className={`brightness-75 w-screen h-1/2 object-cover md:w-screen md:h-[200px]`}
        />
        <h2
          className={`text-center font-bold absolute top-1/4 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-black/80 md:text-3xl p-4 rounded-md hover:text-pink-400`}
        >
          Experience a World of Vibrant Color
        </h2>
        <br />
      </div>
      {
        <div>
          <ProductList products={products} />
        </div>
      }
    </div>
  );
};
export default ProductListingPage;
