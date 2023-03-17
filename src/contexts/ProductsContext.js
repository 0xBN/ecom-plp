import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sizeFilter, setSizeFilter] = useState(null);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (product) => {
    // update cartItems and totalCost state based on the product being added to the cart
  };

  const removeFromCart = (productId) => {
    // update cartItems and totalCost state based on the product being removed from the cart
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        priceRange,
        setPriceRange,
        selectedFilters,
        setSelectedFilters,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        cartItems,
        setCartItems,
        totalCost,
        setTotalCost,
        sizeFilter,
        setSizeFilter,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
