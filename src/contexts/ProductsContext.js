import React, { createContext, useState, useEffect } from 'react';
import productsData from '../data/products.json';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sizeFilter, setSizeFilter] = useState(null);
  const [colorFilter, setColorFilter] = useState(null);
  const [uniqueColorList, setUniqueColorList] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({});

  const [sortOrder, setSortOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // Load products data from the local JSON file
    setProducts(productsData);

    // Extract unique colors from the loaded data
    const uniqueColors = [
      ...new Set(productsData.map((product) => product.color)),
    ];

    setUniqueColorList(uniqueColors);
  }, []);

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
        colorFilter,
        setColorFilter,
        uniqueColorList,
        setUniqueColorList,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
