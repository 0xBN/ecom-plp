import React, { createContext, useState, useEffect } from 'react';
import productsData from '../data/products.json';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [originalOrder, setOriginalOrder] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sizeFilter, setSizeFilter] = useState(null);
  const [colorFilter, setColorFilter] = useState(null);
  const [uniqueColorList, setUniqueColorList] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({});

  const [sortOrder, setSortOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [sizesTotalCost, setSizesTotalCost] = useState([]);

  useEffect(() => {
    // Load products data from the local JSON file
    setProducts(productsData);
    setOriginalOrder(productsData);

    // Extract unique colors from the loaded data
    const uniqueColors = [
      ...new Set(productsData.map((product) => product.color)),
    ];

    setUniqueColorList(uniqueColors);

    // Retrieve cart data from localStorage, if it exists
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart.cartItems);
      setTotalCost(parsedCart.totalCost);
      setSizesTotalCost(parsedCart.sizesTotalCost);
    }
  }, []);

  useEffect(() => {
    // Update localStorage with cart data whenever cartItems, totalCost, or sizesTotalCost changes
    const cartData = { cartItems, totalCost, sizesTotalCost };
    localStorage.setItem('cart', JSON.stringify(cartData));
  }, [cartItems, totalCost, sizesTotalCost]);

  const sortProductsByPriceLowToHigh = () => {
    setSortOrder('lowToHigh');
  };

  const sortProductsByPriceHighToLow = () => {
    setSortOrder('highToLow');
  };

  const addToCart = (product) => {
    // Check if product with the same id and size already exists in the cart
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size === product.size
    );

    if (existingProductIndex !== -1) {
      // If product already exists in the cart, update the quantity and total cost
      const updatedCartItems = [...cartItems];
      const existingProduct = updatedCartItems[existingProductIndex];
      existingProduct.quantity += 1;
      existingProduct.totalCost += product.price;
      setCartItems(updatedCartItems);
      setTotalCost((prevTotalCost) => prevTotalCost + product.price);
    } else {
      // If product is not already in the cart, add it as a new item
      const newCartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        totalCost: product.price,
        size: product.size,
        image: product.image,
      };
      console.log({ newCartItem });
      setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
      setTotalCost((prevTotalCost) => prevTotalCost + product.price);
      console.log({ cartItems });
      console.log('added to cart');
    }
  };
  const removeFromCart = (productId) => {
    // Find the cart item with the matching productId
    const cartItemToRemoveIndex = cartItems.findIndex(
      (item) => item.id === productId
    );

    if (cartItemToRemoveIndex !== -1) {
      // If cart item exists, remove it from the cartItems array and update the totalCost
      const cartItemToRemove = cartItems[cartItemToRemoveIndex];
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(cartItemToRemoveIndex, 1);
      setCartItems(updatedCartItems);
      setTotalCost(
        (prevTotalCost) => prevTotalCost - cartItemToRemove.totalCost
      );
    }
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const updateTotalCost = (cartItems) => {
    // calculate the total cost of the items in the cart and update the state
    const totalCost = cartItems.reduce((acc, item) => acc + item.totalCost, 0);

    // calculate the total cost of each size in the cart
    const sizesTotalCost = cartItems.reduce((sizes, item) => {
      const { size, totalCost } = item;
      const index = sizes.findIndex((s) => s.size === size);

      if (index === -1) {
        sizes.push({ size, totalCost });
      } else {
        sizes[index].totalCost += totalCost;
      }

      return sizes;
    }, []);

    setTotalCost(totalCost);
    setSizesTotalCost(sizesTotalCost);
  };

  const updateSizesTotalCost = (cartItems) => {
    const newSizesTotalCost = cartItems.reduce((acc, item) => {
      const { id, size, quantity } = item;
      const product = products.find((p) => p.id === id);
      const { price } = product;

      if (acc[size]) {
        acc[size] += price * quantity;
      } else {
        acc[size] = price * quantity;
      }

      return acc;
    }, {});

    setSizesTotalCost(newSizesTotalCost);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
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
        sortProductsByPriceLowToHigh,
        sortProductsByPriceHighToLow,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        updateTotalCost,
        sizesTotalCost,
        setSizesTotalCost,
        updateSizesTotalCost,
        originalOrder,
        setOriginalOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
