import { useContext } from 'react';
import { ProductsContext } from './../contexts/ProductsContext';
import { ResetFilterButton, FilterForm, ProductList } from '../components';
// import products from './../data/products.json';

const ProductListingPage = () => {
  const { priceRange, sizeFilter, colorFilter, sortOrder, products } =
    useContext(ProductsContext);
  return (
    <div>
      {
        <div>
          <hr />
          <div>
            temp state viewer (in ProductListingPage.js)
            <p>PriceRange: {JSON.stringify(priceRange)}</p>
            <p>Size: {sizeFilter}</p>
            <p>Color: {colorFilter}</p>
            <p>Sort: {sortOrder}</p>
          </div>
          <br />
          <br />
          <ResetFilterButton />
          <hr />
          <FilterForm />
          <ProductList products={products} />
        </div>
      }
    </div>
  );
};
export default ProductListingPage;
